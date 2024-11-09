// ForgotPin.js
import React, { useState } from 'react';

function ForgotPin({ onReset }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPin = () => {
    // Add logic to send reset PIN link to the provided email
    setMessage(`Reset PIN link sent to ${email}`);
    // Perform any additional actions like sending an email
    onReset(); // Optional: Callback to parent component to reset PIN state
  };

  return (
    <div>
      <h2>Forgot PIN</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
      <button onClick={handleResetPin}>Reset PIN</button>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPin;
