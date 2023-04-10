import React from 'react'
import logo from '../../img/logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} className='logo'/>
        <ul>
            <li>
                <a href="#">Login</a>
            </li>
            <li>
                <a href="#">Sign Up</a>
            </li>
            <li className='search'>
                <a href="#">
                <i className="fas fa-search"/>
                </a>
            </li>
            <li className="hamburger">
                <a href="#">
                    <div className="bar"></div>
                </a>
            </li>
            
        </ul>
      </nav>
    </header>
  )
}
