import React from 'react'
import "./App.css";
import {Swiper, SwiperSlide} from "swiper/react";
import ProfilePic1 from "./img/profile1.jpg";
import ProfilePic2 from "./img/profile2.jpg";
import ProfilePic3 from "./img/profile3.jpg";
import ProfilePic4 from "./img/profile4.jpg";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";


function Testimonial() {
    const clients =[
        {
            img:ProfilePic1,
            review:" Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque dapibus justo sit amet metus volutpat id fringilla dui vulputate. Nullam nec semper leo, eget commodo libero. Fusce malesuada turpis in nisi hendrerit eget varius justo ultricies.",
        },
        {
            img:ProfilePic2,
            review:" Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque dapibus justo sit amet metus volutpat id fringilla dui vulputate. Nullam nec semper leo, eget commodo libero. Fusce malesuada turpis in nisi hendrerit eget varius justo ultricies.",
        },
        {
            img:ProfilePic3,
            review:" Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque dapibus justo sit amet metus volutpat id fringilla dui vulputate. Nullam nec semper leo, eget commodo libero. Fusce malesuada turpis in nisi hendrerit eget varius justo ultricies.",
        },
        {
            img:ProfilePic4,
            review:" Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque dapibus justo sit amet metus volutpat id fringilla dui vulputate. Nullam nec semper leo, eget commodo libero. Fusce malesuada turpis in nisi hendrerit eget varius justo ultricies.",
        },
    ]

  return (
    <div className='t-wrapper' id='testimonials'>
    <div className='t-heading'>
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me..</span>
        <div className='blur t-blur1 ' style={{background: "var(--purple)"}}></div>
        <div className='blur t-blur2 ' style={{background: "skyblue"}}></div>
    </div>
    <Swiper pagination={{clickable: true, }} modules={[Pagination]}>
        {clients.map((client, index)=>{
            return (
                <SwiperSlide key={index}>
                  <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          
          
        </Swiper>
    </div>
  )
}

export default Testimonial