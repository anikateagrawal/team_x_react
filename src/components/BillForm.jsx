import React, { useState } from 'react';
import './bill.css';

function BillForm({ setProductData}) {
  const [formData, setFormData] = useState({
    productName: '',
    price: 0,
    cgstRate: 0,
    sgstRate: 0,
    quantity: 0,
  });

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
    console.log(formData);
    setProductData(formData);
   // handleCreateInvoice();
    //onsubmit(formData);
  };

  return (
    <div className="product-form-container">
    <h1 className='h1234'>Bill Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
      </form>
    </div>
  );
}

export default BillForm;
