import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../NavBar/navbar.css";
import logo from '../../assets/MM.png';
import menu from '../../assets/Ham Menu.png';

export default function SubRequestNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setShowMenu(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav className="navbar subrequestPage">

      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Hamburger wrapper */}
      <div className="hamburgerWrapper" ref={menuRef}>
        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(prev => !prev)}
          style={{ display: "flex" }} // force always visible
        />

        {/* Dropdown menu */}
        <div className={`navMenu ${showMenu ? "show" : ""}`}>
          <Link
            to="/"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>

          <a
            href="https://www.linkedin.com/in/matthew-m-8b1903256/"
            target="_blank"
            rel="noopener noreferrer"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            LinkedIn
          </a>
        </div>
      </div>

    </nav>
  );
}
