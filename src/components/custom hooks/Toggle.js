import React from 'react'
import Section from './Section';
import useToggle from './useToggle'

const Toggle = () => {
    const [button,toggle]=useToggle();
    const [section,Update]=useToggle();
  return (
    <div>Toggle
        {section && <Section/>}
        <button onClick={Update}>Read More</button>
        <button onClick={toggle}>Smile</button>
        {(button)?'😃':'🥹'}
    </div>
  )
}

export default Toggle