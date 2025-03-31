import React, { useState } from "react"
import './Navbar.css'
import logo from '../Assets/Perfumes/logo.png'
import cart_icon from '../Assets/shopping-cart.png'

const Navbar = () => {

    const [menu,setMenu] = useState("Perfumes");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Perfume" width="50px" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() =>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("vehicle")}}>Vehicles{menu==="vehicle"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("perfume")}}>Perfumes{menu==="perfume"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login_cart">
                <button>Login</button>
                <img src={cart_icon} alt="cart" width="40px" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar