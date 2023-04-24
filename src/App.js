import './App.css';
import Login from './login';
import Dashboard from './public/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState();

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)}/>} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
