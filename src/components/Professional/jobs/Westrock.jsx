import React from 'react'
import './Jobs.css'

function Westrock() {
  return (
    <div className="job-content">
        <div className="position-title-container"><p>Digital Manufacturing Analyst Co-op</p></div>
        <div className="position-desc-container">
          <div className="job-details">
            <div className="left-details">
              <p className="job-details-text"><span>Company: </span>Smurfit Westrock</p>
              <p className="job-details-text"><span>City: </span>Atlanta, GA</p>
              <p className="job-details-text"><span>Frameworks/Applications Used:</span></p>
            </div>
            <div className="right-details">
              <p className="job-details-text"><span>From: </span>May 2024 - Aug 2025<span>(1yr 3mo)</span></p>
              <p className="job-details-text"><span>Business Category: </span>Manufacturing</p>
              <p className="job-details-text"><span>Core Concepts Used/Learned:</span></p>
              <p className="concepts-text">Data Warehousing, Data Modeling, Data Cleaning, Materialized Views, ERP System, CI/CD, Agile Methodologies, ELT, OLAP, OLTP, AWS Cloud</p>
            </div>
          </div>
          <div className="job-key-projects">
            <p className="key-projects-title">Key Projects</p>
            <div className="key-project-container">
              <p className="key-project-name">Sensor Dashboard for IOT devices planted on-site</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
            </div>
            <div className="key-project-container">
              <p className="key-project-name">Maintenance Reporting Application</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Westrock