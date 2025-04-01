import React, { useState } from "react" 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/shopping-cart2.png'
import { Link } from "react-router-dom"


const Navbar = () => {

    const[menu, setMenu] = useState('cars')

    return (
        <div className="navbar">
            <div className="navlogo">
                <img src={logo} alt="logo" width="50px"/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu" >
                <li onClick={() =>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li> 
                <li onClick={() =>{setMenu('cars')}}><Link style={{ textDecoration: 'none' }} to='/cars'>Car</Link> {menu==='cars'?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu('perfumes')}}><Link style={{ textDecoration: 'none' }} to='/perfumes'>Perfume</Link> {menu==='perfumes'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
                <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart} alt="cart" width="40px"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar