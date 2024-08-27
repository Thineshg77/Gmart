import React from 'react'
import '../Component/Register.css'
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const End = () => {
  return (
    <div className='regi'>
    <h1>Signup</h1>
    <input type="email" placeholder='Email'/>
    <input type="password" placeholder='Create Password' />
    <input type="password" placeholder='Confirm Password'/>
    <a href="/" className='nhs'> <button href="/">Signup</button></a>
    <p>Already have an account? <a href="/Login">Login</a></p>
    <div className="conects">
      <p>Or</p>
      <button><span><FaFacebook /></span><a href="https://www.facebook.com/">Login with Facebook</a></button>
      <button><span><FcGoogle /></span><a href="https://www.google.co.in/">login with Google</a></button>
    </div>
    </div>
  )
}

export default End
