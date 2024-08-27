import React from 'react'
import '../Component/Login.css'
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className='regis'>
    <h1>Login</h1>
    <input type="email" placeholder='Email'/>
    <input type="password" placeholder='Password' />
    <a href="" className='mn'>Forget password?</a>
    <a href="/" className='nh'> <button>Login</button></a>
    <p>Don't have an account? <a href="/Register">Signup</a></p>
    <div className="conect">
      <p>Or</p>
      <button><span><FaFacebook /></span><a href="https://www.facebook.com/">Login with Facebook</a></button>
      <button><span><FcGoogle /></span><a href="https://www.google.co.in/">login with Google</a></button>
    </div>
    </div>
  )
}

export default Login
