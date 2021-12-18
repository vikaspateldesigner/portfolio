import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Approach from './components/Approach/Approach';
import Social from './components/Social/Social';
import About from './components/About/About';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Education from './components/Education/Education';
import Lines from './components/Lines/Lines';
import Footer from './components/Footer/Footer';

import React, { useState, useEffect } from "react";


export default function App() {
  return (
    <>
      <Lines/>
      <Header/>
      <div className="port__Sticked--Header">
      <Header/>
      </div>
      <Hero/>
      <Skills/>
      <Approach/>
      <Social/>
      <About/>
      <Education/>
      <Footer/>
      <div className='cursor' id="cursor">
          <svg width="35" height="auto" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.41421 26.5858C2.63316 25.8047 1.36684 25.8047 0.585786 26.5858C-0.195262 27.3668 -0.195262 28.6332 0.585786 29.4142L3.41421 26.5858ZM42.2804 29.5364C43.1289 28.8293 43.2436 27.5682 42.5364 26.7196C41.8293 25.8711 40.5682 25.7564 39.7196 26.4636L42.2804 29.5364ZM0.585786 29.4142C4.21767 33.0461 10.8278 36.2041 18.3457 36.9283C25.9366 37.6595 34.6133 35.9257 42.2804 29.5364L39.7196 26.4636C32.9867 32.0743 25.4134 33.5905 18.7293 32.9467C11.9722 32.2959 6.28233 29.4539 3.41421 26.5858L0.585786 29.4142Z" fill="#03EA0C"/>
          <path d="M38 8C38 12.4183 34.5376 16 31.5 16C28.4624 16 25 12.4183 25 8C25 3.58172 28.4624 0 31.5 0C34.5376 0 38 3.58172 38 8Z" fill="#03EA0C"/>
          <circle cx="31.5" cy="11.5" r="4.5" fill="#08DA11"/>
          <path d="M18 8C18 12.4183 14.5376 16 11.5 16C8.46243 16 5 12.4183 5 8C5 3.58172 8.46243 0 11.5 0C14.5376 0 18 3.58172 18 8Z" fill="#03EA0C"/>
          <circle cx="11.5" cy="11.5" r="4.5" fill="#08DA11"/>
          </svg>
      </div>
      </>
  );
}
