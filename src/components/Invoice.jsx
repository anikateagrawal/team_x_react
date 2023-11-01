import React from 'react';
import './Invoice.css';

function Invoice({ productData, onGoBack }) {
  const { productName, price, cgstRate, sgstRate, quantity } = productData;
  const totalPrice = price * quantity;
  const totalTax = (price * (cgstRate + sgstRate) * quantity) / 100;
  const grandTotal = totalPrice + totalTax;

  return (
    <div className="invoice-container">
      <h2>Invoice</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>CGST</th>
            <th>SGST</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>${price.toFixed(2)}</td>
            <td>{cgstRate}%</td>
            <td>{sgstRate}%</td>
            <td>{quantity}</td>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="total">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Total Tax: ${totalTax.toFixed(2)}</p>
        <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}

export default Invoice;
