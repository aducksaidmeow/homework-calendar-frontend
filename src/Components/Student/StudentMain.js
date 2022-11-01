import StudentCalendar from "./StudentCalendar";
import { Link } from 'react-router-dom';

export default function TeacherMain() {

    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    if (email != null && role === 'student') {
        return (
            <div>
                <StudentCalendar />
            </div>
        )
    } else {
        return (
            <div>
                <div>Something is wrong!</div>
                <Link to="/">Navigate to login page</Link>
            </div>
        );
    }
}