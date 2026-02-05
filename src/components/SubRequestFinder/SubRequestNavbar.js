import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/navbar.css"; // reuse your existing navbar styles
import logo from '../../assets/MM.png';
import contactImg from '../../assets/logo-hero.png';

export default function SubRequestNavbar() {
  return (
    <nav className="navbar">
      {/* Left logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Center Home link */}
      <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
        <Link to="/" className="desktopMenuListItemSRF">
          Home
        </Link>
      </div>

      {/* Right button/image */}
      <a href="https://www.linkedin.com/in/matthew-m-8b1903256/" target="_blank" rel="noopener noreferrer">
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="Contact" className="desktopMenuImg2" />
        </button>
      </a>
    </nav>
  );
}
