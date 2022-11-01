import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <h1>Google Calendar API</h1>
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
