import React, { useState } from "react" 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/shopping-cart2.png'


const Navbar = () => {

    const[menu, setMenu] = useState('Cars')

    return (
        <div className="navbar">
            <div className="navlogo">
                <img src={logo} alt="logo" width="50px"/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu" >
                <li onClick={() =>{setMenu("Shop")}}>Shop {menu==='Shop'?<hr/>:<></>}</li> 
                <li onClick={() =>{setMenu('Cars')}}>Cars {menu==='Cars'?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu('Perfumes')}}>Perfumes {menu==='Perfumes'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart} alt="cart" width="40px"/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar