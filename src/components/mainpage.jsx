import React from 'react';

import { Button } from './Button';
import './mainpage.css';


function HeroSection() {
  return (
    <div className='main-container'>
      <h1>Supporting charties around the world</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Donate Now
        </Button>
  
      </div>
    </div>
  );
}

export default HeroSection;
