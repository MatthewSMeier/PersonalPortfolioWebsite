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
import svelteLogo from "../../assets/svelte.svg";
import nextLogo from "../../assets/nextjs.svg";
import djangoLogo from "../../assets/django.svg";
import springLogo from "../../assets/springboot.svg";
import expressLogo from "../../assets/express.svg";
import flaskLogo from "../../assets/flask.svg";
import fastapiLogo from "../../assets/fastapi.svg";
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
        <span className="skillDesc">I focus on building reliable, efficient, and user-centered software by combining strong technical foundations with practical problem-solving. My work spans frontend development, backend systems, and software engineering, with an emphasis on performance, scalability, and clean architecture.</span>
        <div className = "skillBars">
        <div className = "skillBar">
        <div className = "skillBarText">
          <h2 className="skillBarTextTitle">Frontend Development   </h2>
          <p className="skillBarTextDesc">I build responsive, intuitive, and visually engaging user interfaces using modern technologies with a focus on mobile compatibility.</p>
         <div className="skillsGrid">
      <SkillCard logo={htmlLogo} name="HTML" color="#f16529" />
      <SkillCard logo={cssLogo} name="CSS" color="#2965f1" />
      <SkillCard logo={jsLogo} name="JavaScript" color="#9E8F00" />
      <SkillCard logo={tsLogo} name="TypeScript" color="#3178C6" />
      <SkillCard logo={bootstrapLogo} name="Bootstrap" color="#7952B3" />
      <SkillCard logo={tailwindLogo} name="Tailwind" color="#0891B2" />
      <SkillCard logo={sassLogo} name="SASS" color="#CC6699" />
      <SkillCard logo={reactLogo} name="React" color="#21A1F1" />
      <SkillCard logo={nextLogo} name="Next.js" color="#B0B0B0" />
      <SkillCard logo={svelteLogo} name="Svelte" color="#FF3E00" />
        </div>
        </div>
        </div>

        <div className = "skillBar">
        <div className = "skillBarText">
          <h2 className="skillBarTextTitle">Backend Development</h2>
          <p className="skillBarTextDesc">I develop scalable APIs and databases with modern backend frameworks. Furthermore, I design scalable server-side applications with database-driven architectures.</p>
        <div className="skillsGrid">
        <SkillCard logo={fastapiLogo} name="FastAPI" color="#00C7B7" />
        <SkillCard logo={flaskLogo} name="Flask" color="#B0B0B0" />
        <SkillCard logo={djangoLogo} name="Django" color="#0F4D34" />
        <SkillCard logo={expressLogo} name="Express" color="#5A5A5A" />
        <SkillCard logo={springLogo} name="Spring Boot" color="#6DB33F" />
        </div>
        </div>
        </div>


        <div className = "skillBar">
        <div className = "skillBarText">
          <h2 className="skillBarTextTitle">Software Engineering</h2>
          <p className="skillBarTextDesc">I apply algorithmic thinking, data structures, and Big-O complexity analysis to develop and create efficient and scalable software systems.</p>
        <div className="skillsGrid">
        <SkillCard logo={javaLogo} name="Java" color="#B0B0B0" />      
        <SkillCard logo={rLogo} name="R" color="#276DC3" />
        <SkillCard logo={pythonLogo} name="Python" color="#FFB300" />  
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