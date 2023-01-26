import React from 'react'
import {Link} from "react-router-dom";



export const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='logo'>
          <h1>Pam</h1>
        </div>
        <ul className='navLinks'>
           <li>
            <Link to="/">About</Link>
           </li>
           <li>
            <Link to="/projects">Projects</Link>
           </li>
           <li>
            <Link to="/contact">Contact</Link>
           </li>
           
        </ul>
        <div className="menu-burger">
            <div className="line1"></div>
            <div className="line2"></div>
             <div className="line3"></div>
       </div>
    </div>
  )
}
