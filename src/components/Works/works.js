import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './works.css';
import GitHub from '../../assets/github2.png';
import Portfolio1 from '../../assets/subRequest.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';

const Works = () => {
  const navigate = useNavigate();

  const handleClick = (project) => {
    if (project === 'subrequestfinder') {
      navigate('/subrequestfinder');
    }
  };

  return (
    <section id='works'>
      <h2 className="worksTitle">Portfolio</h2>
      <span className="worksDesc">
        Linked below are some of my recent projects that encompass a wide variety of different softwares.
        My dream position is to one day become a full-stack developer after getting experience as a frontend
        and backend developer respectively.
      </span>

      <div className="worksImgs">
        <img
          src={Portfolio1}
          alt=""
          className="worksImg"
          onClick={() => handleClick('subrequestfinder')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={Portfolio2}
          alt=""
          className="worksImg"
          onClick={() => handleClick('subrequestfinder')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={Portfolio3}
          alt=""
          className="worksImg"
          onClick={() => handleClick('subrequestfinder')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={Portfolio4}
          alt=""
          className="worksImg"
          onClick={() => handleClick('subrequestfinder')}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className="workBtns">
        <button className="workBtn1" onClick={() => navigate('/subrequestfinder')}>
          Project Details
        </button>

        <a href="https://github.com/MatthewSMeier" target="_blank" rel="noopener noreferrer">
          <button className="workBtn2">
            <img src={GitHub} alt="" className="githubLogo" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Works;
