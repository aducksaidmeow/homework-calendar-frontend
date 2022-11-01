import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Components/Login';
import AddInfo from './Components/AddInfo';
import StudentMain from './Components/Student/StudentMain';
import TeacherMain from './Components/Teacher/TeacherMain';

const root = ReactDOM.createRoot(document.getElementById('root'));

const CLIENT_ID = '751663766420-54n8kdogn61k73lv5e40k9jbrjk80eeh.apps.googleusercontent.com'

root.render(
   <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/add-info" element={ <AddInfo /> } />
          <Route path="/student-calendar" element={ <StudentMain /> } />
          <Route path="/teacher-calendar" element={ <TeacherMain /> } />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
