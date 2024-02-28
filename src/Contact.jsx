import React from 'react'
import emailjs from '@emailjs/browser';
import "./App.css";
import { themeContext } from "./Context.jsx";
import { useContext } from "react";
import { useRef } from 'react';
function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('sohaibDurrani99', 'template_s3o5f4n', form.current, 'Mp5JYG5HzGX2WxXlk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact-form' id='contactUs'>
     <div className='w-left'>
        <div className='awesome'>
         <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
         <span>Contact me</span>
         <div className='blur s-blur1' style={{background: '#abf1ff94'}}></div>
        </div>
     </div>
     <div className='c-right'>
      <form ref={form} onSubmit={sendEmail}>
       <input type='text' name='user_name' className='user' placeholder='Name'/>
       <input type='email' name='user_email' className='user' placeholder='Email'/>
       <textarea name='message' className='user' placeholder='Message'/>
       <input type='submit' value="send" className='button' />
       <div className='blur c-blur1' style={{background: "var(--purple)"}}></div>
      </form>
     
     </div>
    
    
    </div>
  )
}

export default Contact