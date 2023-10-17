import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import companyLogo from './images/company-logo.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src={companyLogo} alt="Company Logo" />      
        </Link>
      </div>
      <ul className="navbar-links">
        
          
          <Link className='homebtn' to="/home"> Home</Link>
          <Link className='aboutbtn' to="/about">About</Link>
          <Link className='loginbtn' to="/Login"> Login</Link>
          <Link className='layoutbtn' to="/Layout"> Layout</Link>

        
      </ul>
    </nav>
  );
}

export default Navbar;
