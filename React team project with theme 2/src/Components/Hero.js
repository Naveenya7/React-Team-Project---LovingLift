// Hero.js

import React from 'react';
import './Hero.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../App.css';

function Hero() {
  return (
    <div className='hero-container'>
       
      
      
      <h1>Empower Change Through Fundraising</h1>
      <p>Join us in making a difference in the lives of those in need.</p>
      <div className='hero-btns'>
      <Link to='/startafundraiser' className='btns'>
          <Button buttonStyle='btn--outline teal-button' buttonSize='btn--large'>
            Start Your Fundraiser
          </Button>
        </Link>
        <Button className='btns' buttonStyle='btn--primary dark-teal-button' buttonSize='btn--large'>
          Donate
        </Button>
      </div>
    </div>
  );
}

export default Hero;
