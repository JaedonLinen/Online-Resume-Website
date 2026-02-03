import React from 'react'
import Cert1 from '../../../assets/dea-c01.webp';
import Cert2 from '../../../assets/pl-300.png';
import Cert3 from '../../../assets/ctda.png';
import './Certs.css'

function Certs() {
  return (
    <div className='Certs'>
        <div className="pro-title">
            <p className="pro-title-text">Certificates</p>
        </div>
        <div className="certs-panels-container">
          <div className="cert-panel first">
            <img src={Cert1} alt="" className="cert-logo"/>
            <p className="cert-title">AWS Certified Data Engineer - Associate</p>
            <p className="cert-progress complete">Completed</p>
            <p className="cert-description">Associate validates skills and knowledge in core data-related AWS services, ability to ingest and transform data, orchestrate data pipelines while applying programming concepts, design data models, manage data life cycles, and ensure data quality.</p>
            <a className="cert-badge" href="https://www.credly.com/badges/c486d31a-6a6f-49af-a6a7-c785119abc9d" target="_blank" rel="noopener noreferrer">Click to view badge</a>          
          </div>
          <div className="cert-panel second">
            <img src={Cert2} alt="" className="cert-logo unfinished"/>
            <p className="cert-title">Microsoft Power BI Data Analyst Associate</p>
            <div className="progress-animation">
              <p className="cert-progress">In Progress</p>
              <div className="progress-dots">
                <div className="p-dot"></div>
                <div className="p-dot"></div>
                <div className="p-dot"></div>
              </div>
            </div>
            <p className="cert-description">Demonstrate methods and best practices that align with business and technical requirements for modeling, visualizing, and analyzing data with Microsoft Power BI.</p>
          </div>
          <div className="cert-panel third">
            <img src={Cert3} alt="" className="cert-logo unfinished"/>
            <p className="cert-title">Salesforce Certified Tableau Data Analyst</p>
            <p className="cert-progress">Next in line</p>
            <p className="cert-description">Certified Tableau Data Analysts enable stakeholders to make business decisions by understanding the business problem, identifying data to explore for analysis, and delivering actionable insights.</p>
          </div>
        </div>
    </div>
  )
}

export default Certs