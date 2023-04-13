import React from 'react'
import './Person.css'

const Person = () => {
    let n=Math.floor(Math.random()*10);
  return (
    <div style={{color:'red',backgroundColor:'lightblue',fontSize:'2rem'}} className='person'>

        {  (n > 5)? <p>lucky</p> : <p>unlucky</p> }
        <p>Name:Anikate</p>
        <p>Age:21</p>
        <p>{n}</p>
    </div>
    
  )
}

export default Person