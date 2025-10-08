import React from 'react'
import './Jobs.css'

function RNDC() {
  return (
    <div className="job-content">
        <div className="position-title-container"><p>IT Data Analyst Intern</p></div>
        <div className="position-desc-container">
          <div className="job-details">
            <div className="left-details">
              <p className="job-details-text"><span>Company: </span>Republic National Distributing Company (RNDC)</p>
              <p className="job-details-text"><span>City: </span>Atlanta, GA</p>
              <p className="job-details-text"><span>Frameworks/Applications Used:</span></p>
            </div>
            <div className="right-details">
              <p className="job-details-text"><span>From: </span>May 2023 - Aug 2023<span>(3mo)</span></p>
              <p className="job-details-text"><span>Business Category: </span>Wholesaling</p>
              <p className="job-details-text"><span>Core Concepts Used/Learned:</span></p>
              <p className="concepts-text">Data Governance, Data Completeness, Data Cleaning, Machine Learning, Pivot Tables, XLookups, Python Scripting, Oracle, OLAP </p>
            </div>
          </div>
          <div className="job-key-projects">
            <p className="key-projects-title">Key Projects</p>
            <div className="key-project-container">
              <p className="key-project-name">Data Completeness Report of Suppliers and Consumers</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
            </div>
            <div className="key-project-container">
              <p className="key-project-name">Python Script Converting Nested JSON to Excel File</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
              <p className="key-project-desc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequuntur? Iste quos fugit quis similique doloribus asperiores quo est ipsum repudiandae. Fuga rerum aliquid recusandae voluptate ex. Commodi, saepe adipisci!</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RNDC