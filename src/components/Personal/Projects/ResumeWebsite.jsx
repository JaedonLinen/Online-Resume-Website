import React from 'react'
import '../Personal.css'
import grad from '../../../assets/grad.png';
import react from '../../../assets/React-icon.svg.png';

function ResumeWebsite() {
    return (
      <div className="individual-project">
          <div className="project-title">
              <p className="project-title-text">Resume Website</p>
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
                  <p className="project-desc-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptatum iure dolore maxime quos? Vitae quasi fugit quos molestias velit eveniet odio maxime rerum possimus nesciunt ex, autem, provident maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae odio ut nostrum, alias obcaecati eum corrupti nobis accusamus impedit repudiandae ab ipsa illum. Non modi ab tempora repellat deleniti.</p>
                  <div className="framework-section">
                      <p>Framework :</p>
                      <div className="framework-logos-section">
                          <div className="framework">
                              <img src={react} alt="" className='framework-icon'/>
                              <h6>React JS</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default ResumeWebsite