import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/MM.png';
import contactImg from '../../assets/logo-hero.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import menu from '../../assets/Ham Menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === '/';

  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        {isHome ? (
          <>
            <ScrollLink
              activeClass="active"
              to="intro"
              spy
              smooth
              offset={-100}
              duration={500}
              className="desktopMenuListItem"
            >
              Home
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="skills"
              spy
              smooth
              offset={-150}
              duration={500}
              className="desktopMenuListItem"
            >
              Expertise
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="works"
              spy
              smooth
              offset={-250}
              duration={500}
              className="desktopMenuListItem"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy
              smooth
              offset={-200}
              duration={500}
              className="desktopMenuListItem"
            >
              Contact
            </ScrollLink>
          </>
        ) : (
          <>
            <Link to="/" className="desktopMenuListItem">
              Back to Portfolio
            </Link>
            <Link to="/subrequestfinder" className="desktopMenuListItem">
              Sub Request Finder
            </Link>
          </>
        )}
      </div>

      {/* LinkedIn Button - never pushed */}
      <a
        href="https://www.linkedin.com/in/matthew-m-8b1903256/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="Contact" className="desktopMenuImg2" />
        </button>
      </a>

{/* Hamburger Menu - absolutely positioned, independent */}
<div className="hamburgerWrapper" ref={menuRef}>
  <img
    src={menu}
    alt="Menu"
    className="mobMenu"
    onClick={() => setShowMenu(prev => !prev)}
  />

  {/* Dropdown menu */}
  <div className={`navMenu ${showMenu ? 'show' : ''}`}>
    {isHome ? (
      <>
        <ScrollLink to="intro" smooth offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</ScrollLink>
        <ScrollLink to="skills" smooth offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Expertise</ScrollLink>
        <ScrollLink to="works" smooth offset={-30} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</ScrollLink>
        <ScrollLink to="contact" smooth offset={10} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</ScrollLink>
        <a href="https://www.linkedin.com/in/matthew-m-8b1903256/" target="_blank" rel="noopener noreferrer" className="listItem" onClick={() => setShowMenu(false)}>LinkedIn</a>
      </>
    ) : (
      <>
        <Link to="/" className="listItem" onClick={() => setShowMenu(false)}>Back to Portfolio</Link>
        <Link to="/subrequestfinder" className="listItem" onClick={() => setShowMenu(false)}>Sub Request Finder</Link>
        <a href="https://www.linkedin.com/in/matthew-m-8b1903256/" target="_blank" rel="noopener noreferrer" className="listItem" onClick={() => setShowMenu(false)}>LinkedIn</a>
      </>
    )}
  </div>
</div>
    </nav>
  );
};

export default Navbar;
