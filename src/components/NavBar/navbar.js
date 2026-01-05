import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/MM.png';
import contactImg from '../../assets/logo-hero.png';
import { Link as ScrollLink } from 'react-scroll'; // for scrolling on home page
import { Link, useLocation } from 'react-router-dom'; // for routing on other pages
import menu from '../../assets/Ham Menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === '/';

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        {isHome ? (
          // Scroll links on home page
          <>
            <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
              Home
            </ScrollLink>
            <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-150} duration={500} className="desktopMenuListItem">
              Expertise
            </ScrollLink>
            <ScrollLink activeClass="active" to="works" spy={true} smooth={true} offset={-250} duration={500} className="desktopMenuListItem">
              Portfolio
            </ScrollLink>
            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-200} duration={500} className="desktopMenuListItem">
              Contact
            </ScrollLink>
          </>
        ) : (
          // Normal links on other pages
          <>
            <Link to="/" className="desktopMenuListItem">
              Back to Portfolio
            </Link>
            <Link to="/subrequestfinder" className="desktopMenuListItem">
              Sub Request Finder
            </Link>
            {/* Add more links here for other pages */}
          </>
        )}
      </div>

      <a href="https://www.linkedin.com/in/matthew-m-8b1903256/" target="_blank" rel="noopener noreferrer">
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg2" />
        </button>
      </a>

      {/* Mobile Menu Toggle */}
      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

      {/* Mobile Menu */}
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        {isHome ? (
          <>
            <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}> Home </ScrollLink>
            <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Expertise </ScrollLink>
            <ScrollLink activeClass="active" to="works" spy={true} smooth={true} offset={-30} duration={500} className="listItem" onClick={() => setShowMenu(false)}> Portfolio </ScrollLink>
            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={10} duration={500} className="listItem" onClick={() => setShowMenu(false)}> Contact </ScrollLink>
          </>
        ) : (
          <>
            <Link to="/" className="listItem" onClick={() => setShowMenu(false)}>
              Back to Portfolio
            </Link>
            <Link to="/subrequestfinder" className="listItem" onClick={() => setShowMenu(false)}>
              Sub Request Finder
            </Link>
            {/* Add more links here */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
