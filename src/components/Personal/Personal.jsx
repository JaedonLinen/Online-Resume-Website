import React from 'react'
import './Personal.css'
import grad from '../../assets/grad.png';

function Personal() {
  return (
    <div className='personal-section'>
        <div className="pers-title">
          <p className="pers-title-text">Personal Projects</p>
        </div>
        <div className="personal-projects-container">
          <div className="individual-project">
            <div className="project-title">
              <p className="project-title-text">Ledger Pro - Accounting & Finance Platform</p>
              <div className="subtitle-content">
                <p className="project-subtitle">Full-Stack Development</p>
                <p className="project-date">May 2025</p>
              </div>
            </div>
            <div className="project-content">
              <div className="project-visuals">
                <img src={grad} alt="" />
              </div>
              <div className="project-desc">
                <p className="project-desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae odio ut nostrum, alias obcaecati eum corrupti nobis accusamus impedit repudiandae ab ipsa illum. Non modi ab tempora repellat deleniti.</p>
                <div className="framework-section">
                  <p>Framework :</p>
                  <div className="framework-logos">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Personal