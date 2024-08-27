import React, { useState } from 'react'
import data from '../assets/products.json'
import './home.css'
import Product from './product'
import appli from '../Images/appli.webp'
import flight from '../Images/flight.webp'
import grocery from '../Images/grocery.webp'
import mobile from '../Images/mobil.webp'
import ban from '../Images/det.jpg'
import fash from '../Images/f.png'
import gadet from '../Images/wat.png'
import grow from '../Images/grow.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = ({cart, setcart}) => {
const [products] = useState(data)

  return (
    <>
     <div className="search">
      <input type="text"  placeholder='search'/>
     </div>
     <div className="banner">
     <a href="/">
     <img src={mobile} alt="" />
      <img src={fash} alt="" />
      <img src={gadet} alt="" />
      <img src={appli} alt="" />
      <img src={grow} alt="" />
      <img src={grocery} alt="" />
      <img src={flight} alt="" />
     </a>
    </div>
    <div className="ban">
      <img src={ban} alt="" />
    </div>
     <div className="head">
     <h1>Favorites at a steal!</h1>
     </div>
   <div className="gt">
    {products.map((product)=>(
     <Product key={product.id} product={product} cart={cart} setcart={setcart}/>
    ))}
   </div>
    <div className="lest">
      <h3>Contact Us</h3>
      <p>

G mart Private Limited,Buildings Alyssa, Begonia &Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, India
Registered Office Address:
  G marts Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 044-45614700 / 044-67415800</p>
<div className="conta">
<a href="https://www.instagram.com/"><FaSquareInstagram /></a>
<a href="https://www.facebook.com/"><FaFacebook /></a>
<a href="https://web.whatsapp.com/"><IoLogoWhatsapp /></a>
</div>
    </div>
    </>
  )
  
}

export default Home
