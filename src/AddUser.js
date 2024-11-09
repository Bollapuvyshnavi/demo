import React from 'react';
import { useNavigate } from 'react-router-dom';


function AddUser() {
    const history = useNavigate();

  // Logic to add a new user
  const handleAddUser = () => {
    // Implement logic to add a new user
    history('/user-registration')
  };

  return (
    <div className="add-user-container">

      
      {/* Add form fields or any other UI elements for adding a new user */}
      <button onClick={handleAddUser} className="underline">Add Another User</button>
    </div>
  );
}

export default AddUser;

