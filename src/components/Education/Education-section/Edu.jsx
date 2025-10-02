import React from 'react'
import ksu from '../../../assets/ksu.svg';
import './Edu.css'

function Edu() {
  return (
    <div className='Edu'>
        <div className="pro-title">
            <p className="pro-title-text">Education</p>
        </div>
        <div className="education-panels">
            <div className="e-panel-1">
                <img src={ksu} alt="" />
            </div>
            <div className="e-panel-2">
                <div className="college-name">
                    <p>Kennesaw State University</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edu