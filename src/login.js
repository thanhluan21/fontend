// import React, { useState, useEffect} from 'react';
import React, { useState, useEffect } from 'react';

import './login.css';
import axios from 'axios';
import cors from 'cors';
import CryptoJS from 'crypto-js';
import { HelmetProvider  } from 'react-helmet-async';
import { useNavigate,useHistory  } from 'react-router-dom';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://5lc6fv1o56.execute-api.eu-central-1.amazonaws.com/routing/authenticate/login',
        { username: username, password: password },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Content-Type': 'application/json'
          }
        }
      );
      let sha256Token = CryptoJS.SHA256(response.data.token).toString();
      localStorage.setItem('token', sha256Token);
      setLoggedIn(true);
    } catch (error) {
      setError('Sai tai khoan hoac mk');
    }
  };
  useEffect(() => {
    if (loggedIn) {
      navigate('/dashboard');
    }
},[ loggedIn])
  return (
    // <form onSubmit={handleLogin}>
    //   <div>
    //     <label>Username:</label>
    //     <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
    //   </div>
    //   <div>
    //     <label>Password:</label>
    //     <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
    //   </div>
    //   {error && <p>{error}</p>}
    //   {message && <p>{message}</p>}
    //   <button type="submit">Login</button>
    // </form>
    <>
    <HelmetProvider>
       
        <title>My Website</title>
        <link rel="stylesheet" href="login.css" />
          <div className="sign-up">
              <div className="circle circle--red"></div>
              <div className="circle circle--yellow"></div>
              <div className="circle circle--green"></div>
              <div className="circle circle--purple"></div>
              <form onSubmit={handleLogin} className="sign-up__form">
                <div className="sign-up__content">
                  <h2 className="sign-up__title">Login</h2>
                  <input className="sign-up__inp" type="text" placeholder='Username' required="required" value={username} onChange={(event) => setUsername(event.target.value)} />
                  <input className="sign-up__inp" type="password" placeholder="Password" required="required" value={password} onChange={(event) => setPassword(event.target.value)}/><a className="forgot__password">Forgot your password</a>
                </div>
                <div className="sign-up__buttons"><a className="btn btn--register" href="#register">Register</a>
                  <button className="btn btn--signin" type="submit">Sign in</button>
                </div>
              </form>
          </div> 
          </HelmetProvider>
    </>
  );
};

export default Login;
