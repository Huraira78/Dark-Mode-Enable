import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assessts/logo.jpg'
import './navbar.css'

const Navbar = ({mode}) => {
    
  return (
    <div>
        <nav style={mode}>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">ContactUs</Link></li>
                <li><Link to="/Help">Help</Link></li>
            </div>
        </nav>
    </div>
  )
}

export default Navbar