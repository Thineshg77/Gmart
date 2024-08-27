import React from 'react'
import './Thank.css'
import { FcCheckmark } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
const Thank = () => {
  return (
    <div className='thank'>
        <div className="sticker"><FcCheckmark /><FcInTransit /></div>
      <h1>Thanks You For Your Order.</h1>
      <h2>Visit Again!!!</h2>
     <a href="/"> <button type="button">Continue Shopping!!!!</button></a>
    </div>
  )
}

export default Thank
