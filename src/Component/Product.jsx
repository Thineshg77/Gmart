import React from 'react'
import '../Component/product.css'
const Product = ({product, cart, setcart}) => {
    const name = product.name.length > 10 ? product.name.substring(0,10) + ".." : product.name;

    const addcart=()=>{
      setcart([...cart,product])
    };
    const removecart=()=>{
      setcart(cart.filter((c)=>c.id !== product.id))
    }
  return (
   <>
   
     <div className='product'>
        <div className="img">
            <img src={product.imgUrl} alt="" />
        </div>
      <div className="details" key={product.id}>
        <h2>{name}</h2>
        <p>₹{product.price}</p>
       {cart.includes(product)?( <button className='btnremove' onClick={removecart}>Remove from cart</button>) : ( <button onClick={addcart}>ADD to cart</button>)}
      </div>
    </div>
   </>
  )
}

export default Product
