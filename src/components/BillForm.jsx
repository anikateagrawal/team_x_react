import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bill.css';
import { clienturl,billurl } from '../config';

function BillForm() {
  const [res,setRes]=useState("");
  const [clients,setClients]=useState([]);

  const [formData, setFormData] = useState({
    productName: '',
    price: 0,
    cgstRate: 0,
    sgstRate: 0,
    quantity: 0,
  });

  useEffect(()=>{
    fetch(clienturl).then((res)=>res.json()).then((data)=>setClients(data)).catch((e)=>alert(e));
  },[]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateTotal = () => {
    const { price, cgstRate, sgstRate, quantity } = formData;
    const totalPrice = price * quantity;
    const totalTax = (price * (cgstRate + sgstRate) * quantity) / 100;
    return totalPrice + totalTax;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const client=document.getElementById("Client").value;
    const data={...formData,"total":calculateTotal(),"client":client};

    console.log(data);

    fetch(billurl, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    }).then((res) => setRes("success"))
      .catch((e) => setRes(e));
  };

  return (
    <div className="product-form-container">
    <h1 className='h1234'>Bill Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Client">Client</label>
          <select name="Client" id="Client" required>
            {clients.map((c)=><option value={c._id}>{c.name}</option>)}
          </select>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (per unit):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cgstRate">CGST Rate (%):</label>
          <input
            type="number"
            id="cgstRate"
            name="cgstRate"
            value={formData.cgstRate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sgstRate">SGST Rate (%):</label>
          <input
            type="number"
            id="sgstRate"
            name="sgstRate"
            value={formData.sgstRate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="total">Total:</label>
          <span>{calculateTotal()}</span>
        </div>
        <button type="submit">Generate Invoice</button>
        <br />
        {res!==""?res:""}
      </form>
      <Link to="/">Create Client</Link>
    </div>
  );
}

export default BillForm;
