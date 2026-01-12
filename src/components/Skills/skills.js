import React from 'react'
import './skills.css';
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import jsLogo from "../../assets/javascript.svg";
import tsLogo from "../../assets/typescript.svg";
import bootstrapLogo from "../../assets/bootstrap.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import sassLogo from "../../assets/sass.svg";
import reactLogo from "../../assets/react.svg";
import npmLogo from "../../assets/npm.svg";
import yarnLogo from "../../assets/yarn.svg";
import nodeLogo from "../../assets/nodejs.svg";
import djangoLogo from "../../assets/django.svg";
import springLogo from "../../assets/springboot.svg";
import mysqlLogo from "../../assets/mysql.svg";
import expressLogo from "../../assets/express.svg";
import javaLogo from "../../assets/java.svg";
import pythonLogo from "../../assets/python.svg";
import rLogo from "../../assets/r.svg";
import cLogo from "../../assets/c.svg";
import cppLogo from "../../assets/cplusplus.svg";
import SkillCard from "./skillcard";



const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Expertise</span>
        <span className="skillDesc">Listed below are my fields of interest and my main areas of expertise. While by no means an exhaustive description, many of my specific abilities in each respective field are mentioned below. I'm constantly trying to learn new things to improve my abilites as a web developer and I'm always willing to try new software.</span>
        <div className = "skillBars">
        <div className = "skillBar">
        <div className = "skillBarText">
          <h2 className="skillBarTextTitle">Frontend Development   </h2>
          <p>I have expertise in HTML, CSS, and JavaScript, enabling me to create engaging and responsive web interfaces. My proficiency extends to leveraging modern web frameworks such as React.js, allowing for the development of dynamic and interactive user experiences. Additionally, I have experience with CSS frameworks like Bootstrap, enabling streamlined styling processes.</p>
         <div className="skillsGrid">
      <SkillCard logo={htmlLogo} name="HTML" color="#f16529" />
      <SkillCard logo={cssLogo} name="CSS" color="#2965f1" />
      <SkillCard logo={jsLogo} name="JavaScript" color="#9E8F00" />
      <SkillCard logo={tsLogo} name="TypeScript" color="#3178C6" />
      <SkillCard logo={bootstrapLogo} name="Bootstrap" color="#7952B3" />
      <SkillCard logo={tailwindLogo} name="Tailwind" color="#0891B2" />
      <SkillCard logo={sassLogo} name="SASS" color="#CC6699" />
      <SkillCard logo={reactLogo} name="React" color="#21A1F1" />
      <SkillCard logo={npmLogo} name="NPM" color="#CB3837" />
      <SkillCard logo={yarnLogo} name="Yarn" color="#2C8EBB" />
        </div>
        </div>
        </div>

        <div className = "skillBar">
        <div className = "skillBarText">
          <h2 className="skillBarTextTitle">Software Engineering</h2>
          <p>I am confident programming in Java, R, C, C++, and Python. Furthermore, I have expertise in designing and implementing efficient algorithms and data structures to solve complex problems. Moreover, I have experience in database implementation using mySQL and constructing projects using Agile development principles.</p>
        <div className="skillsGrid">
        <SkillCard logo={nodeLogo} name="Node.js" color="#43853D" />
        <SkillCard logo={mysqlLogo} name="MySQL" color="#2C7BB6" />
        <SkillCard logo={djangoLogo} name="Django" color="#0F4D34" />
        <SkillCard logo={expressLogo} name="Express" color="#5A5A5A" />
        <SkillCard logo={springLogo} name="Spring Boot" color="#6DB33F" />
        </div>
        </div>
        </div>


        <div className = "skillBar">
        <div className = "skillBarText">
          <h2 className="skillBarTextTitle">Mobile App Design</h2>
          <p>I have experience using Swift and Javascript for mobile app development projects. Furthermore, I am familiar with programming in different development environments, such as React Native and XCode, for various UI/UX designs.</p>
        <div className="skillsGrid">
        <SkillCard logo={javaLogo} name="Java" color="#5382A1" />
        <SkillCard logo={pythonLogo} name="Python" color="#306998" />
        <SkillCard logo={rLogo} name="R" color="#276DC3" />
        <SkillCard logo={cLogo} name="C" color="#00599C" />
        <SkillCard logo={cppLogo} name="C++" color="#00599C" />
        </div>
        </div>
        </div>

        </div>
    </section>
  )
}

export default Skills;