import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
    </div>
  );
}

export default HeroSection;
