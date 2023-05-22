import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';
import '../Styles/Header.css';

function Header() {
  return (
    <nav className="navBar">
      <div className="logo_title">
        <NavLink to="/" exact>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <a href="#home" className="title">
          Space Travelers&apos; Hub
        </a>
      </div>
      <div className="navItems">
        <ul className="navLinks">
          <li>My Profile</li>
          <li>Missions</li>
          <li>Rockets</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
