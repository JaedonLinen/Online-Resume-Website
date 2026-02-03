import React from 'react'
import './Jobs.css'
import apex from '../../../assets/apex.jpg';
import mo from '../../../assets/mo.png';
import aws from '../../../assets/aws.png';
import ado from '../../../assets/ado.png';



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
              <div className="job-frameworks-used">
                <img src={apex} alt="" />
                <img src={mo} alt="" />
                <img src={aws} alt="" />
                <img src={ado} alt="" />
              </div>
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
              <p className="key-project-name">Sensor Dashboard for IoT devices planted on-site</p>
              <p className="key-project-desc">- Built an IoT sensor dashboard in AWS IoT SiteWise using stakeholder-provided alarm data from Excel, improving on-site visibility into device performance and reducing issue response time through real-time monitoring and automated alerts.</p>
            </div>
            <div className="key-project-container">
              <p className="key-project-name">Maintenance Reporting Application</p>
              <p className="key-project-desc">- Analyzed millions of purchase order records from JDE ERP and built a reporting application in Oracle APEX that tracked equipment maintenance costs across multiple plants and mills, streamlining operational visibility and cost management.</p>
            </div>
            <div className="key-project-container">
              <p className="key-project-name">Optimized Data Accessibility with Redshift Materialized Views</p>
              <p className="key-project-desc">- Developed materialized views in Amazon Redshift to optimize performance and deliver tailored reporting for individual business units, reducing query time and improving accessibility of plant and mill level insights.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Westrock