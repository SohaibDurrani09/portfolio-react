import React from 'react'
import "./App.css";
import Github from '../src/img/github.png'
import Linkedin from '../src/img/linkedin.png'
import Instagram from '../src/img/instagram.png'
import Vector1 from '../src/img/Vector1.png'
import Vector2 from '../src/img/Vector2.png'
import boy from '../src/img/boy.png'
import thumbup from '../src/img/thumbup.png'
import Crown from '../src/img/crown.png'
import glassesemoji from '../src/img/glassesimoji.png'
import FloatingDiv from './FloatingDiv';
import { themeContext } from "./Context.jsx";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration:2 , type:'spring'}

  return (
    <div className='intro'>
      <div className='i-left'>
       <div className='i-name'>
         <span style={{color: darkMode? 'white': ''}}> Hy! I Am  </span>
         <span> M SOHAIB</span>
         <span>Frontend devolopper with high level of experience in web Designing and devolopment, producing the Quality work</span>

       </div>
       <Link spy={true} smooth={true} to='contactUs'><button className='button i-button'> Hire me</button></Link>  
       <div className='i-icons'>
            <img src={Github} alt=''/>
            <img src={Linkedin} alt=''/>
            <img src={Instagram} alt=''/>
       </div>      
      </div>
      <div className='i-right'>
        <img src={Vector1} alt=''/>
        <img src={Vector2} alt=''/>
        <img src={boy} alt=''/>
        <motion.img initial={{left:'-36%'}} whileInView={{left: '-24%'}} transition={transition} src={glassesemoji} alt=''/>
        <motion.div initial={{left:'74%', top:'-4%'}} whileInView={{left: '68%'}} transition={transition} style={{top: '-4%', left: '68%'}}><FloatingDiv img={Crown} text1="web" text2="Devoloper"/></motion.div>
        <motion.div initial={{left:'9rem', top:'18rem'}} whileInView={{left: '0rem'}} transition={transition} style={{top: '18rem', left: '0rem'}}><FloatingDiv img={thumbup} text1="Best" text2="Design"/></motion.div>
        <div className='blur' style={{background: "rgb{238 210 255}"}}></div>
        <div className='blur' style={{background: "#C1F5FF", top: "17rem", width: "21rem", height:"11rem", left:"-9rem"}}></div>
      </div>
      
    </div>
  );
};


export default Intro