// FingerprintAuth.js
import React, { useState } from 'react';

function FingerprintAuth() {
  const [message, setMessage] = useState('');

  const authenticateWithFingerprint = () => {
    // Add your fingerprint authentication logic here
    // For demonstration, assume authentication always succeeds
    setMessage('Fingerprint authentication successful');
  };

  return (
    <div className="container">
      <button  onClick={authenticateWithFingerprint}>Login with Fingerprint</button>
      <p>{message}</p>
    </div>
  );
}

export default FingerprintAuth;
