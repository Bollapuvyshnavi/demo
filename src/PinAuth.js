// PinAuth.js
import React, { useState,useRef } from 'react';

function PinAuth() {
  const [pin, setPin] = useState(['', '', '', '']);
  const [message, setMessage] = useState('');
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const handlePinChange = (index, value) => {
    // Check if the entered value is an integer
    if (!isNaN(parseInt(value)) && isFinite(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      setMessage('');
      
      if(index<3){
       inputRefs.current[index+1].current.focus()
      }
    }else if(value===''){
      const newPin=[...pin]
      newPin[index]='';
      setPin(newPin)
    
    if(index>0){
      inputRefs.current[index-1].current.focus();
    }
    } else {
      setMessage('Please enter only integers for the PIN.');
    }
  }
  const handleKeyDown=(index,e)=>{
    if(e.key==='Backspace' && index>0){
      // handlePinChange(index,'')
    } else if(e.key==='ArrowLeft' && index>0){
      inputRefs.current[index-1].current.focus()
    }else if (e.key==='ArrowRight'&& index<3){
    inputRefs.current[index+1].current.focus()

    }
  }
  const authenticateWithPin = () => {
    // Add your pin authentication logic here
    // For demonstration, assume authentication always succeeds
    if(pin.every(digit=>digit !=='')) {
    alert('PIN authentication successful');
  }else{
    setMessage('please enter all four digits of the pin')
  }
}
  const handleForgotPassword=()=>{
    console.log('User clicked on forgot password')
  }

  return (
    <div className="container">
      <div className="row">
        {pin.map((digit, index) => (
          <div className="col" key={index}>
            <input
              className="pin-input"
              type="password"
              maxLength="1"
              value={digit}
              onChange={(e) => handlePinChange(index, e.target.value)}
              onKeyDown={(e)=>{
                handleKeyDown(index, e)
              }}
              ref={inputRefs.current[index]}
              
            />
          </div>
        ))}
        <button className="pin-button" onClick={authenticateWithPin}>Submit</button>
        <button className='forgotpin' onClick={handleForgotPassword}>Forgot Pin?</button>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default PinAuth;
