import TeacherCalendar from "./TeacherCalendar";
import GroupList from './GroupList/GroupList';
import GroupButtonPopup from "./AddGroup/AddGroupPopup";
import AddEventPopup from "./AddEvent/AddEventPopup";
import { Link } from 'react-router-dom'

export default function TeacherMain() {

    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    
    if (email != null && role === 'teacher') {
        return (
            <div>
                <GroupList />
                <GroupButtonPopup />
                <AddEventPopup />
                <TeacherCalendar />
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