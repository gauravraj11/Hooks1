import React from 'react'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <ul className='navlink'>
        <li>
            {/* <a href="/home">Home</a> */}
            {/* <NavLink to= "/home">Home</NavLink> */}
            <Link to= "/home">Home</Link>
        </li>
        <li>
            {/* <a href="/about">About</a> */}
            <NavLink to= "/about">About</NavLink>
        </li>
        <li>
            {/* <a href="/contact">Contact</a> */}
            <NavLink to= "/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
