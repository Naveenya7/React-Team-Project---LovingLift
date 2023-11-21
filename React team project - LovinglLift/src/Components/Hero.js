// Hero.js

import React from 'react';
import './Hero.css';
import { Button } from './Button';
import '../App.css';

function Hero() {
  return (
    <div className='hero-container'>
      <video src='./Videos/BGVIDEO.mp4' autoPlay loop muted />
      <h1>Empower Change Through Fundraising</h1>
      <p>Join us in making a difference in the lives of those in need.</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline teal-button' buttonSize='btn--large'>
          Start Your Fundraiser
        </Button>
        <Button className='btns' buttonStyle='btn--primary dark-teal-button' buttonSize='btn--large'>
          Donate
        </Button>
      </div>
    </div>
  );
}

export default Hero;
