import React from 'react'
import {Link} from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
        <ul>
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
    </div>
  )
}
