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
        <NavLink to="/myProfile" className='menu_item'>
          My Profile
        </NavLink>
        <NavLink to="/dragons" className='menu_item'>
          Dragons |
        </NavLink>
        <NavLink to="/Missions" className='menu_item'>
          Missions |
        </NavLink>
        <NavLink to="/" exact className='menu_item'>
          Rockets |
        </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
