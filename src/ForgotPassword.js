// ForgotPassword.js
import React, { useState } from 'react';

function ForgotPassword({ onReset }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // Add logic to send reset password link to the provided email
    setMessage(`Reset password link sent to ${email}`);
    // Perform any additional actions like sending an email
    onReset(); // Optional: Callback to parent component to reset password state
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
