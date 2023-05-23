import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';
import '../Styles/Header.css';

function Header() {
  const { pathname } = useLocation();

  const isActiveLink = (match) => {
    if (match || (pathname === '/myProfile') || (pathname === '/missions')) {
      return true;
    }
    return false;
  };

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
          <li>
            <NavLink exact to="/myProfile" isActive={isActiveLink} activeClassName="active">
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/missions" isActive={isActiveLink} activeClassName="active">
              Missions
            </NavLink>
          </li>
          <li>Rockets</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
