import React from 'react';
import "./Hero.css";
import heroImg from "../../images/2.webp";
const Hero = () => {
    return (
        <div className='hero-section'>
           <div className="left-side">
               <h2>Crystal sound With 30% discound</h2>
               <p>WIRELESS FREEDOM, GREAT SOUND IN SILENCE. Experience the next level of silence.</p>
           </div>
           <div className="right-side">
               <img src={heroImg} alt="" />
           </div>
        </div>
    );
};

export default Hero;