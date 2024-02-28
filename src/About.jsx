import React, {useState} from 'react'
import "./App.css";
import sk from '../src/img/sk.jpeg'
import { themeContext } from "./Context.jsx";
import { useContext } from "react";
// import { useState } from "react";

function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [selectedTab, setSelectedTab] = useState('about');

  const handleTabClick = (tab) => {
      setSelectedTab(tab);
  };

  return (
    <div className="about-me-container" id='aboutMe'>
            <div className="about-me-left">
                <img src={sk} alt="" />
            </div>
            <div className="about-me-right">
                <h2 style={{color: darkMode? 'white': ''}}>About Me</h2>
                <p>
                    I am a Frontend developer with experience in web designing and development, producing quality work.
                </p>
                <div className="about-me-tabs">
                    <div
                        className={`about-me-tab ${selectedTab === 'skills' ? 'active' : ''}`}
                        onClick={() => handleTabClick('skills')}
                    >
                        Skills
                    </div>
                    <div
                        className={`about-me-tab ${selectedTab === 'experience' ? 'active' : ''}`}
                        onClick={() => handleTabClick('experience')}
                    >
                        Experience
                    </div>
                    <div
                        className={`about-me-tab ${selectedTab === 'education' ? 'active' : ''}`}
                        onClick={() => handleTabClick('education')}
                    >
                        Education
                    </div>
                </div>
                <div className="about-me-content">
                    {selectedTab === 'skills' && (
                      <div className='about-me-cont'><span>Web Devolopment</span>
                      <span> Html,Css,Bootstrap,React.Js </span>
                      <span> App Devolopment</span>
                      <span> React Native</span>
                        </div>
                    )}
                    {selectedTab === 'experience' && (
                      <div className='about-me-cont'><span>Frontend Devoloper</span>
                      <span> 1 year Experience in React.Js</span>
                      
                        </div>
                    )}
                    {selectedTab === 'education' && (
                      <div className='about-me-parent'>
                      <div className='about-me-1'><span>Degree </span>
                      <span> Field </span>
                      <span> Institute </span>
                      <span> CGPA</span>
                        </div>
                        <div className='about-me-2'><span> : BS</span>
                      <span> : IT </span>
                      <span> : University of Agriculture Peshawar</span>
                      <span> : 3.1</span>
                        </div>
                      </div>
                      
                    )}
                </div>
            </div>
        </div>
    );
};

export default About