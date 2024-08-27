import React, { useEffect } from 'react'
import './Cart.css'
import { useState } from 'react'


const Cart = ({product, cart, setcart}) => {
  const [total, setotal]= useState(0);
  useEffect(()=>{
    setotal(cart.reduce((acc, curr)=>
       acc + parseInt(curr.price),0));
 }, [cart]);

  return (
   <>
   <div className="ht">
   <h2>CART PRODUCTS</h2>
    <div className='cart-container' >
      {
        cart.map((product)=>(
          <div className="cart-product" key={product.id}>
        <div className="img">
          <img src={product.imgUrl} alt="" />
        </div>
        <div className="cart-details">
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      </div>
        ))
      }
    </div>
  <a href="/Thank"><button>Total amount:{total}</button></a>
   </div>
   
   
   </>
  )
}

export default Cart
