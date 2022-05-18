import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='/contact'>Contact</NavLink>
        <NavLink className="nav-link" to='/blogs'>Blogs</NavLink>
      </nav>
    </div>
  );
};

export default Header;
