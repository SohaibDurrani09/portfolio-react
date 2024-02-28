import React from 'react'
import "./App.css";
import upwork from "./img/Upwork.png"
import facebook from "./img/Facebook.png"
import Shopify from "./img/Shopify.png"
import amazon from "./img/amazon.png"
import fiverr from "./img/fiverr.png"
import { themeContext } from "./Context.jsx";
import { useContext } from "react";
import { motion } from "framer-motion";

function Works() {
     const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className="awesome">
      
            <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
            <span>Brands & clients</span>
            <span>
             Lorem ispum is simpley dummy text of printing of printing Lorem
             <br />
             ispum is simpley dummy text of printing
             <br />
             ispum is simpley dummy text of printing simpley dummy
             <br />
             ispum is simpley dummy text of printing
            </span>
    
            <button className="button s-button">Hire me</button>
    
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className='w-right'>
        <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-mainCircle"
      >
        <div className="w-secCircle">
          <img src={upwork} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={fiverr} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={amazon} alt="" />
        </div>{" "}
        <div className="w-secCircle">
          <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={facebook} alt="" />
        </div>
      </motion.div>
         <div className='w-backCircle blueCircle '></div>
         <div className='w-backCircle yellowCircle '></div>
        </div>
     
    </div>
  )
}

export default Works