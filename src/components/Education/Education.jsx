import React, { useState } from 'react';
import './Education.css'

function Education() {

  return (
    <div className='professional-section'>
        <div className="pro-title">
          <p className="pro-title-text">Professional Experience</p>
        </div>
        <div className="e-img-con">
          <div className="pic">
            <div className="e-img"></div>
            <div className="e-img-text">
              <p className='e-img-text-main'>Kennesaw State University</p>
              <p className='e-img-text-sub'>2021 - 2025</p>
            </div>
          </div>
          <div className="pic">
            <div className="e-img"></div>
            <div className="e-img-text">
              <p className='e-img-text-main'>Republic National Disributing Company Internship</p>
              <p className='e-img-text-sub'>May 2023 - Aug 2023</p>
            </div>
          </div>
          <div className="pic">
            <div className="e-img"></div>
            <div className="e-img-text">
              <p className='e-img-text-main'>Smurfit Westrock Internship/Co-op</p>
              <p className='e-img-text-sub'>May 2024 - Aug 2025</p>
            </div>
          </div>
          <div className="pic">
            <div className="e-img"></div>
            <div className="e-img-text">
              <p className='e-img-text-main'>AWS Certified Data Engineer - Associate Certification</p>
              <p className='e-img-text-sub'>Sept. 2025</p>
            </div>
          </div>
          <div className="pic">
            <div className="e-img"></div>
            <div className="e-img-text">
              <p className='e-img-text-main'>Network Engineer - AT&T Technology Development Program</p>
              <p className='e-img-text-sub'>Starts July 2026</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Education