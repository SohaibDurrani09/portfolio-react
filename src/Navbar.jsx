import React from 'react'
import "./App.css";
import Toggle from './Toggle';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>PORTFOLIO</div>
        <Toggle />
      </div>
      
      <div className='n-right'>
         <div className='n-list'>
          <ul>
          <Link spy={true} smooth={true} to='Navbar'><li>Home</li></Link>
          <Link spy={true} smooth={true} to='aboutMe'><li>About</li></Link>
          <Link spy={true} smooth={true} to='services'><li>Services</li></Link>
          <Link spy={true} smooth={true} to='experience'><li>Experience</li></Link>
          
          <Link spy={true} smooth={true} to='testimonials'><li>Testimonials</li></Link>
          </ul>
         </div>
         <Link spy={true} smooth={true} to='contactUs'><button className='button n-button'> Contact Us</button></Link>
         
       </div>
     
    </div>
  )
}

export default Navbar