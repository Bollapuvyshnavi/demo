// App.js

import React, {useState} from 'react';
import { Routes,Route } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css'; // Import CSS file
import FingerprintAuth from './FingerprintAuth';
import PinAuth from './PinAuth';
import PasswordAuth from './PasswordAuth';
import AddUser from './AddUser';


function Home() {
  const [selectedAuth, setSelectedAuth] = useState('');

  return (
    
      <div className="container">
        <div className="box">
          <div className='bi bi-person-fill'></div>
          <h1>Welcome to Your Bank Application</h1>
          
          <div className="auth-container">
            
            <button className="auth-option" onClick={() => setSelectedAuth('fingerprint')}>Fingerprint</button>
            <button className="auth-option" onClick={() => setSelectedAuth('pin')}>4-digit Pin</button>
            <button className="auth-option" onClick={() => setSelectedAuth('password')}>Password</button>
          </div>
          <div className="selected-auth">
            {selectedAuth === 'fingerprint' && <FingerprintAuth />}
            {selectedAuth === 'pin' && <PinAuth />}
            {selectedAuth === 'password' && <PasswordAuth />}
          </div>
          {selectedAuth==='fingerprint' &&<AddUser/>}
          {selectedAuth==='pin' &&<AddUser/>}
          {selectedAuth==='password' &&<AddUser/>}

          
          
          
        </div>
      </div>
  
  );
}

export default Home;

