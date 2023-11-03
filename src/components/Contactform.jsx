import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css"; // Import your CSS file
import { clienturl } from "../config";


function ResponsiveForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
  });

  const [res,setRes]=useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch(clienturl, {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    }).then((res) => setRes("success"))
      .catch((e) => setRes(e));
  }

  return (
    <div className="form-container">
      <h1 className="h1234">Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="inpt56"
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
            className="inpt56"
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
          type="text"
            className="inpt56"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            className="inpt56"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
        <br />
        {res!==""?res:""}
      </form>
      <Link to="/bill"> Generate Bill</Link>
    </div>
  );
}

export default ResponsiveForm;
