import React from "react";
import FormComponent from "../../shared/FormComponent.jsx";
import axios from 'axios';

const VoterRegistration = () => {
  const formFields = [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    { name: "passport", label: "Upload Passport", type: "file", accept: ".pdf,.jpg", required: true },
    { name: "addressProof", label: "Address Proof", type: "file", accept: ".pdf,.jpg", required: true },
  ];

  const handleFormSubmit = async (formData) => {
    const data = new FormData(); // ✅ This is what gives you `.append()`
  
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]); // ✅ Append fields properly
    });
  
    try {
      const response = await axios.post('http://localhost:5000/api/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });  
      alert(response.data.message);
    } catch (err) {
      console.error('❌ Registration Failed:', err);
      alert('Something went wrong while registering.');
    }
  };  

  return (
    <div>
      <h2>🗳️ Voter Registration</h2>
      <FormComponent fields={formFields} onSubmit={handleFormSubmit} buttonText="Register" />
    </div>
  );
};

export default VoterRegistration;