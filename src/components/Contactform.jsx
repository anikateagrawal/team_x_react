import React, { useState } from 'react';
import './Form.css'; // Import your CSS file

function ResponsiveForm() {
  const url="http://localhost:5000/client";
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const res = await fetch(url, {
      mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  },
      method: 'post',
   body: {
    "name": formData.name,
    "address":formData.address,
    "email":formData.email,
    "contact":formData.contact,
   },
    }).then((res) => alert("success")).catch((e)=>console.log(e));
  };

  
  return (
   
    <div className="form-container">
     <h1 className='h1234'>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
          className='inpt56'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
          className='inpt56'
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
          className='inpt57'
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
          className='inpt56'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default ResponsiveForm;
