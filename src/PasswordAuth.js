import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordAuth() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const authenticateWithPassword = () => {
    const capitalRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;

    if (
      capitalRegex.test(password) &&
      specialCharRegex.test(password) &&
      lowercaseRegex.test(password) &&
      numberRegex.test(password)
    ) {
      alert('Password authentication successful');
      setTimeout(() => {
        navigate('/success');
      }, 1000); // Navigate after a delay (1 second) to allow time for the success message to display
    } else {
      alert('Incorrect password');
    }
  };

  const handleForgotPassword = () => {
    // Add your logic to handle forgotten password (e.g., show a modal)
    console.log('User clicked on forgot password');
  };

  return (
    <div className="container">
      <input className='password-input' type="password" value={password} onChange={handlePasswordChange}  style={{width: '200px'}}/>
      <button className='pin-button' onClick={authenticateWithPassword}>Password</button>
      <p>{message}</p>
      <button className='forgot' onClick={handleForgotPassword}>Forgot Password?</button>
    </div>
  );
}

export default PasswordAuth;
