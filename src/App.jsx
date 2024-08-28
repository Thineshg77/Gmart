import { useState } from 'react';
import './App.css';
import Header from './Component/Header.jsx';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from './Component/Home.jsx';
import Cart from './Component/Cart.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import Thank from './Component/Thank.jsx';


function App() {
 const [cart, setcart]=useState([])
  return (
    <>
     <BrowserRouter >
     <Header cart={cart}/>
   
     <div className="container" >
      <Routes >
      
        <Route  path='/' element={<Home  cart={cart} setcart={setcart}  />}/>
        <Route  path='/Cart' element={<Cart cart={cart} setcart={setcart}/>}/>
        <Route  path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Thank' element={<Thank/>}/>
      </Routes>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
