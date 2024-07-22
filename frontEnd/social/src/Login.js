import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/CSS/login.css';
import axios from 'axios';
import Logo from '../src/assets/svg/logoBlack.avif';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      if (res.status === 200) {
        localStorage.setItem('jwtToken', res.data.token);
        navigate('/Option');
      }
    } catch (error) {
      console.error('Error during login request:', error);
      setLoginError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className='main'>
      <div className='Sign_in'>
        <form onSubmit={handleForm}>
          <div className='homepage_topRight1'>
            <img className='logo1' src={Logo} alt='logo' />
            <h2 className='homepage_topRight__subtitle'>Sign in to X</h2>
            <div className='homepage_topRight__Buttons'>
              <button type='button' className='primary__button'>
                Sign in with Google
              </button>
              <button type='button' className='primary__button'>
                Sign in with Apple
              </button>

              <h4>or</h4>

              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleUsername}
              />

              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePassword}
              />

              <button type='submit'>Sign in</button>
              <button type='button' className='primary__button'>
                Forget Password
              </button>

              <div className='homepage_topRight__Buttons1'>
                <h3>Don't have an account?</h3>
                <button type='button' className='primary__button'>
                  <a href='/register' className='link'>
                    Sign up
                  </a>
                </button>
              </div>
            </div>
          </div>
        </form>
        {loginError && <h2>{loginError}</h2>}
      </div>
    </div>
  );
}
