import React from 'react'
import "./App.css";
import {Swiper, SwiperSlide} from "swiper/react";
import Sidebar from "./img/sidebar.png"
import Ecommerce from "./img/ecommerce.png"
import hoc from "./img/hoc.png"
import MusicApp from "./img/musicapp.png"
import 'swiper/css';
import { themeContext } from "./Context.jsx";
import { useContext } from "react";



function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio'>
        <span style={{color: darkMode? 'white': ''}}>Recent Project</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
          <SwiperSlide>
            <img  src={Sidebar} alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img  src={Ecommerce} alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img  src={MusicApp} alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img  src={hoc} alt=''/>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio