import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import Button from './Button'
import '../Styles/header.css'

function Header() {
    return (
        <header>
            <div className="app__logo">
                <img src={logo} alt="pondsec logo" />
            </div>
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li>
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link">About</Link>
                    </li>
                    <li>
                        <Link to="/features" className="nav-link">Features</Link>
                    </li>
                </ul>
            </nav>
            
            <div className="header-btn">
                <Link to="/login" className="nav-link">Login</Link>
                    <Button className="register-btn"><Link to='/signup'>Create an account</Link></Button>

                </div>
            

        </header>
    )
}

export default Header
