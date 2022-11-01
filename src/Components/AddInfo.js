import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function AddRole() {
    
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },  
    } = useForm();

    const onSubmit = data => {
        const role = data.role;
        localStorage.setItem('role', role);

        const userId = localStorage.getItem('email');

        axios.post('/api/add-role', { userId, role }).then(response => {
            console.log(response.data);
            axios.post('/api/add-acl', { userId }).then(response => {
                console.log(response.data);
                if (role == 'student') navigate('/student-calendar');
                else navigate('/teacher-calendar');
            }).catch(error => console.log(error));
        }).catch(error => console.log(error.message));
        
    }

    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    if (email != null && role === '') {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <select { ...register("role") } >
                    <option value="student">student</option>
                    <option value="teacher">teacher</option>
                </select>
                <input type="submit" />
            </form>
        );
    } else {
        return (
            <div>
                <div>Something is wrong!</div>
                <Link to="/">Navigate to login page</Link>
            </div>
        );
    }
};