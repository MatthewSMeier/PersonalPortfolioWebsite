import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/MM.png';
import contactImg from '../../assets/logo-hero.png';
import {Link} from 'react-scroll';
import menu from '../../assets/Ham Menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
       <img src={logo} alt="" className='logo' />
       <div className = "desktopMenu">
        <Link activeClass = "active" to='intro' spy={true} smooth={true} offset={-100} duration = {500} className="desktopMenuListItem" >Home</Link>
        <Link activeClass = "active" to='skills' spy={true} smooth={true} offset={-100} duration = {500} className="desktopMenuListItem" >Expertise</Link>
        <Link activeClass = "active" to='works' spy={true} smooth={true} offset={-30} duration = {500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass = "active" to='contact' spy={true} smooth={true} offset={0} duration = {500} className="desktopMenuListItem">Contact</Link>

       </div>
       <a href="https://www.linkedin.com/in/matthew-m-8b1903256/" target="_blank" rel="noopener noreferrer"><button className="desktopMenuBtn">
       <img src={contactImg} alt="" className="desktopMenuImg2"/></button></a>
       
       
       <img src={menu} alt="Menu" className='mobMenu'onClick={() => setShowMenu(!showMenu)}/>
       <div className = "navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass = "active" to='intro' spy={true} smooth={true} offset={-100} duration = {500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass = "active" to='skills' spy={true} smooth={true} offset={-100} duration = {500} className="listItem" onClick={() => setShowMenu(false)}>Expertise</Link>
        <Link activeClass = "active" to='works' spy={true} smooth={true} offset={-30} duration = {500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass = "active" to='contact' spy={true} smooth={true} offset={10} duration = {500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
       </div>
    </nav>    
  )
}

export default Navbar;