import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from './Component/Home';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Register from './Component/Register';


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
      </Routes>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
