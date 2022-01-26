import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroeSection.css'
/* import Video from '../assets/videos' */
function HeroeSection() {
  return( 
  <div className='hero-container'>
 <h1>ADVENTURE AWAITS</h1>
 <p>what are you waiting for?</p>
 <div className='hero-btns'>
 <Button className='btns' buttonStyle= 'btn--outline' buttonSize= 'btn-large'>GET STARTED</Button>
 <Button className='btns' buttonStyle= 'btn--primary' buttonSize= 'btn--large'>WATCH TRAILER < i className='far fa-play-circle'/></Button>
 </div>
 </div>
  )
}

export default HeroeSection;
