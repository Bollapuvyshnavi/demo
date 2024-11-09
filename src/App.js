// App.js

import React, {useState} from 'react';
import { Routes,Route } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css'; // Import CSS file
import FingerprintAuth from './FingerprintAuth';
import PinAuth from './PinAuth';
import PasswordAuth from './PasswordAuth';
import AddUser from './AddUser';
import UserRegistrationForm from './UserRegistrationForm';
import Home from './Home';

function App() {
  const [selectedAuth, setSelectedAuth] = useState('');

  return (
    
      <>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
      <Routes>
          <Route path="/user-registration" element={<UserRegistrationForm/>}/>
            </Routes>
      </>
  
  );
}

export default App;

