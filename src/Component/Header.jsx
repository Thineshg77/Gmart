import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const Header = ({cart}) => {
  return (
    <div className='navbar'>
   <div className="logo">
   <FaGoogle /> <s>Mart</s>
   </div>
   <ul>
    <li>
        <Link to={"/"}><IoMdHome /><h6>Home</h6></Link>
    </li>
    <li>
        <Link to={"/Cart"}><span>{cart.length}</span><FaShoppingCart /><h6>Cart</h6></Link>
    </li>
    <li>
        <Link to={"/Login"}><IoMdContact /><h6>Login</h6></Link>
    </li>
   </ul>
    </div>
  )
}

export default Header
