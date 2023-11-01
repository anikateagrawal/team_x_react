import React, { Component, useState } from 'react';
import './App.css';
import BillForm from './components/BillForm';
import Invoice from './components/Invoice';
import Contactform from './components/Contactform';

function App() {
  const [productData, setProductData] = useState(null); // Initially, productData is null

  return (
    <div className="app">
    <contact />
    <Contactform />
        <BillForm setProductData={setProductData} />
       
    </div>
  );
}

export default App;
