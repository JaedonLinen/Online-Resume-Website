import React from 'react'
import '../Personal.css'
import grad from '../../../assets/grad.png';
import react from '../../../assets/React-icon.svg.png';
import s3 from '../../../assets/aws-s3-logo.png';

function ResumeWebsite() {
    return (
      <div className="individual-project">
          <div className="project-title">
              <p className="project-title-text">Resume Portfolio Website</p>
              <div className="subtitle-content">
                  <p className="project-subtitle">Front-End Development</p>
                  <p className="project-date">Aug 2025</p>
              </div>
          </div>
          <div className="project-content">
              <div className="project-visuals">
                  <img src={grad} alt="" />
              </div>
              <div className="project-desc">
                  <div className="project-desc-text-container">
                     <p className="project-desc-text">I used my coding skills to build a personal online resume website from scratch using React.js. I designed and coded the entire site to showcase my work, skills, and projects in a clean, responsive layout. This site is deployed on AWS S3 for easy access and reliable hosting. It serves as a professional portfolio that reflects both my technical ability and design sense.</p>
                  </div>
                  <div className="framework-section">
                      <p>Framework :</p>
                      <div className="framework-logos-section">
                          <div className="framework">
                              <img src={react} alt="" className='framework-icon'/>
                              <h6>React JS</h6>
                          </div>
                          <div className="framework">
                              <img src={s3} alt="" className='framework-icon'/>
                              <h6>AWS S3</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default ResumeWebsite