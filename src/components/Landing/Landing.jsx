import './Landing.css'
import React from 'react'
import GB from '../GradientBackground/GB';

function Landing() {
  return (
    <div className='Landing-section'>
      <div className="landing-bkg">
        <GB />
      </div>
      <div className="landing-title">
        <p className="pro-title-text">Online Resume</p>
      </div>
      <div className="landing-content">
        <h1 className='title-landing'>Jaedon Linen</h1>
        <h1 className='subtitle-landing'>Data Analyst/Engineer</h1>
        <h1 className='directions-landing'>{"Scroll right to learn more ->"} </h1>
      </div>
    </div>
  )
}

export default Landing