import React from 'react';
import './intro.css';
import bg from '../../assets/Subject.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';


const Intro = () => { 
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span><tr/>
            <span className="introText">I'm <span className="introName">Matthew </span><br/>Frontend Developer</span>
            <p className="introPara">I am a skilled frontend developer with experience in creating<br/> visually appealing and user friendly wesbites.</p>
            <Link><button className = "btn" onClick = {() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}><img src={btnImg} alt="hire" className = "btnImg"></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className ="bg"/>
    </section>
  )
}

export default Intro;