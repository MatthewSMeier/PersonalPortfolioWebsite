import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import SoftwareDesign from '../../assets/cog3.png';
import AppDesign from '../../assets/app-design.png';



const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Expertise</span>
        <span className="skillDesc">Listed below are my fields of interest and my main areas of expertise. While by no means an exhaustive description, many of my specific abilities in each respective field are mentioned below. I'm constantly trying to learn new things to improve my abilites as a web developer and I'm always willing to try new software.</span>
        <div className = "skillBars">

        <div className = "skillBar"><img src={UIDesign} alt ="UIDesign" className="skillBarImage"/>
        <div className = "skillBarText">
          <h2>Frontend Development</h2>
          <p>I have expertise in HTML, CSS, and JavaScript, enabling me to create engaging and responsive web interfaces. My proficiency extends to leveraging modern web frameworks such as React.js, allowing for the development of dynamic and interactive user experiences. Additionally, I have experience with CSS frameworks like Bootstrap, enabling streamlined styling processes.</p>
        </div>
        </div>

        <div className = "skillBar"><img src={SoftwareDesign} alt ="SoftwareDesign" className="skillBarImage"/>
        <div className = "skillBarText">
          <h2>Software Engineering</h2>
          <p>I am confident programming in Java, R, C, C++, and Python. Furthermore, I have expertise in designing and implementing efficient algorithms and data structures to solve complex problems. Moreover, I have experience in database implementation using mySQL and constructing projects using Agile development principles.</p>
        </div>
        </div>

        <div className = "skillBar"><img src={AppDesign} alt ="AppDesign" className="skillBarImage"/>
        <div className = "skillBarText">
          <h2>Mobile App Design</h2>
          <p>I have experience using Swift and Javascript for mobile app development projects. Furthermore, I am familiar with programming in different development environments, such as React Native and XCode, for various UI/UX designs.</p>
        </div>
        </div>

        </div>
    </section>
  )
}

export default Skills;