import React, { useContext, useState } from 'react'
import "./Navber.css"
import logo from "../Assets/SHOPPER Logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from './../../Context/ShopContext'; 
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'

const Navber= ()=> {
    const  navRaf=useRef();
    const [menu,setMenu] =useState("shop");
    const {getTotalCartItems} =useContext(ShopContext);
    
    const showNavbar =() =>{
        navRaf.current.classList.toggle('responsive_nav')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""  width="160px"/>
        </div>
        <ul className='nav-menu' ref={navRaf}>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu=== "shop" ?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}  to="/mens">Men</Link>{menu=== "mens" ?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}  to="/womens">Women</Link>{menu=== "womens" ?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to="/kids">Kids</Link>{menu=== "kids" ?<hr/>:<></>}</li>
            <button onClick={showNavbar} className='nav-btn nav-close-btn'><FaTimes/></button>
        </ul>
        <div className="nav-login-cart">
        <button onClick={showNavbar}className='nav-btn '><FaBars/></button>
            <Link to="/login"><i class="fa-solid fa-user"></i></Link>  
            <Link to="/cart"><img src={cart_icon} alt="" /></Link> 
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>

        

        
        
      
    </div>
  )
}

export default Navber
