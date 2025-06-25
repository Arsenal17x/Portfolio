import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="assets/bgimg3.png" alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hello, I'm a Front-End developer, I specialize in translating creative visions into functional and visually appealing websites.
              With a keen eye for design, I also excel as a UI/UX designer, ensuring user-centric interfaces that elevate the overall user experience.
              My proficiency in programming languages empowers me to bring innovative ideas to life, making me a dedicated and dynamic force in the world of web development.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => opentab('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'tech' ? 'active-link' : ''}`}
                onClick={() => opentab('tech')}
              >
                Tech Stack
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => opentab('education')}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Web/APP interfaces</li>
                <li><span>Front-End Web Development</span><br />Front-End app Development</li>
                <li><span>Programmer</span><br />Competitive Programming<br />Data Structure/Algorithms</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'tech' ? 'active-tab' : ''}`} id="tech">
              <ul>
                <li><span>Frameworks</span><br />Bootstrap5<br />Tailwind CSS<br />React</li>
                <li><span>Designing</span><br />Canva<br />WebFlow</li>
                <li><span>IDE</span><br />Visual Studio Code</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>2019</span><br />High School from Doon Convent School</li>
                <li><span>2021</span><br />Intermediate from Doon Convent School</li>
                <li><span>2022</span><br />B.Tech from GEHU Haldwani.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;