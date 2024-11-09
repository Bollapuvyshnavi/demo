
import React, { useState } from 'react';

function UserRegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        dob: '',
        gender: '',
        address: '',
        accountType: '',
        branch: '',
        phoneNumber: '',
        adhar: false,
        pan: false,
        drivingLicence: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if all required fields are filled
        const requiredFields = ['username', 'password', 'dob', 'gender', 'address', 'accountType', 'branch', 'phoneNumber'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        if (missingFields.length === 0) {
            // Implement logic for form submission
            console.log('Form submitted');
            window.alert('Form submitted successfully!');
        } else {
            const missingFieldNames = missingFields.map(field => `${field.charAt(0).toUpperCase() + field.slice(1)}`).join(', ');
            window.alert(`Please fill in the following fields: ${missingFieldNames}`);
        }
    };

    return (
        <div className="container">
            <div className="box1">
                <h2 style={{ marginTop: '10px', padding: '10px' }}>User Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    {/* Add form fields for user registration */}
                    <div className="form-group1">
                        <label>Username*:</label>
                        <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder='Create user name' required />
                    </div>
                    <div className='form-group2'>
                        <label>Password/Pin*:</label>
                        <input type='password' name='password' value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className='form group11'>
                        <label>Date of Birth*:</label>
                        <input type='date' name='dob' value={formData.dob} onChange={handleChange} required />
                    </div>
                    <div className='form-group3'>
                        <label>Gender*:</label> &nbsp;
                        <input type='radio' name='gender' value='male' checked={formData.gender === 'male'} onChange={handleChange} required />Male &nbsp;
                        <input type='radio' name='gender' value='female' checked={formData.gender === 'female'} onChange={handleChange} />Female
                    </div>
                    <div className='form-group4'>
                        <label>Address*:</label>
                        <input type='text' name='address' value={formData.address} onChange={handleChange} placeholder='Enter your Address' required />
                    </div>
                    <div className='form-group5'>
                        <label>Type of Account*:</label> &nbsp;
                        <input type='radio' name='accountType' value='saving account' checked={formData.accountType === 'saving account'} onChange={handleChange} required />Saving Account &nbsp;
                        <input type='radio' name='accountType' value='current account' checked={formData.accountType === 'current account'} onChange={handleChange} />Current Account
                    </div>
                    <div className='form-group6'>
                        <label>Branch*:</label>
                        <input type='text' name='branch' value={formData.branch} onChange={handleChange} placeholder='Enter your Branch' required />
                    </div>
                    <div className='form-group7'>
                        <label>Phone Number*:</label>
                        <input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                    <div className='form-group9'>
                        <label>Address Proof*:</label> &nbsp;
                        <input type='checkbox' name='adhar' checked={formData.adhar} onChange={handleChange} required />Adhar Card &nbsp;
                        <input type='checkbox' name='pan' checked={formData.pan} onChange={handleChange} />PAN Card &nbsp;
                        <input type='checkbox' name='drivingLicence' checked={formData.drivingLicence} onChange={handleChange} />Driving Licence 
                    </div>
    
                    <div className='form-group10'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegistrationForm;

