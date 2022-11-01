import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {

    const navigate = useNavigate();

    const login = useGoogleLogin({
        flow: 'auth-code',
        scope: 'https://www.googleapis.com/auth/calendar',
        onSuccess: codeResponse => { 
            console.log(codeResponse);
            const { code } = codeResponse;

            axios.post('/api/create-tokens', { code }).then(response => {
                const decoded_id_token = jwt_decode(response.data.id_token);
                const refresh_token = response.data.refresh_token;
                const fullEmail = decoded_id_token.email;
                localStorage.setItem('fullEmail', fullEmail);
                const split = fullEmail.split('@');
                const email = split[0];
                localStorage.setItem('email', email);
                axios.post('/api/add-email', { fullEmail, email }).then(response => {
                    console.log(response.data);
                    const userId = localStorage.getItem('email');
                    axios.post('/api/add-no-role', { userId, refresh_token }).then(response => {
                        console.log(response.data);
                        axios.post('/api/get-role', { userId }).then(response => {
                            const role = response.data;
                            localStorage.setItem('role', role);
                            if (role === 'student') navigate('student-calendar');
                            else if(role === 'teacher') navigate('teacher-calendar');
                            else navigate('add-info');
                        }).catch(error => console.log(error.message));
                    }).catch(error => console.log(error))
                }).catch(error => console.log(error))
            }).catch(error => console.log(error))
        },
    });
    return (   
        <div>
            <h1>Login to continue!</h1>
            <button onClick={() => login()}>
                Sign in with Google 🚀{' '}
            </button>
        </div> 
    );
}