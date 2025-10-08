import React, { useState } from 'react'
import './Professional_E.css'
import Westrock from './jobs/Westrock'
import RNDC from './jobs/RNDC'
import rndc_logo from '../../assets/RNDC.png';
import west_logo from '../../assets/west.webp';

function Professional_E() {
  const [activeRole, setActiveRole] = useState('westrock') // default view

  return (
    <div className='Professional-E-section'>
      <div className="Professional-title">
        <p className="pro-title-text">Work Experience</p>
      </div>

      <div className="work-content-container">
        <div className="left-work-content">
          <div className='work-img-con'> 
            {activeRole === 'westrock' && <img className="work-img small" src={west_logo} alt="" />}
            {activeRole === 'rndc' && <img className="work-img" src={rndc_logo} alt="" />}
          </div>
          <div className="work-role-con">
            <div
              className={`role-title-bttn ${activeRole === 'westrock' ? 'active' : ''}`}
              onClick={() => setActiveRole('westrock')}
            >
              <p>Digital Manufacturing Analyst Co-op</p>
            </div>

            <div
              className={`role-title-bttn ${activeRole === 'rndc' ? 'active' : ''}`}
              onClick={() => setActiveRole('rndc')}
            >
              <p>IT Data Analyst Intern</p>
            </div>
            
          </div>
        </div>

        <div className="right-work-content">
          {activeRole === 'westrock' && <Westrock />}
          {activeRole === 'rndc' && <RNDC />}
        </div>
      </div>
    </div>
  )
}

export default Professional_E
