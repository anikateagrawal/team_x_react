import React ,{useState} from 'react'


const Product = (props) => {
    // let price=props.price;
    const [price,setPrice]= useState(props.price);
    const [qty,setQty]=useState(1);
  return (
    <div  className='col  col-lg-3 m-2 ' style={{width:"20rem"}}>
    <div className='card shadow mx-auto' >
        <img src={props.img} alt={props.name}></img>
        <div className='card-body'>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h5>Price: {price}</h5>
        <p>Quantity: {qty} <button onClick={add}>Add</button></p>
        </div>
    </div>
    </div>
  )
  function add(){
    setQty(qty+1);
    priceChangeHandler(qty+1);
  }
  function priceChangeHandler(q){
    setPrice(q*props.price);
  }
}

export default Product