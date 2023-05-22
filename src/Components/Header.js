import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';
import '../Styles/Header.css';

function Header() {
  return (
    <nav>
      <div className="logo_title">
        <NavLink to="/" exact>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <a href="#home" className="title">
          Space Travelers&apos; Hub
        </a>
      </div>
      <div className="menu_items">
        Test
      </div>
    </nav>
  );
}

export default Header;
