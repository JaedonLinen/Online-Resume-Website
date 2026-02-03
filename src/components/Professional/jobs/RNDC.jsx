import React from 'react'
import './Jobs.css'
import excel from '../../../assets/excel.png';
import python from '../../../assets/python.png';
import pbi from '../../../assets/Power_BI_Logo.svg';

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
              <div className="job-frameworks-used">
                <img src={excel} alt="" />
                <img src={python} alt="" />
                <img src={pbi} alt="" />
              </div>
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
              <p className="key-project-name">Power BI Sales Forecasting and Inventory Optimization Project</p>
              <p className="key-project-desc">- Presented a Power BI sales forecasting dashboard to the CEO, highlighting how sales data, seasonal trends, and social media insights could predict demand and guide smarter restocking decisions for alcoholic beverages, improving inventory accuracy and reducing stockouts.</p>
            </div>
            <div className="key-project-container">
              <p className="key-project-name">Data Completeness Report of Suppliers and Consumers</p>
              <p className="key-project-desc">- Analyzed millions of supplier and consumer records in the RNDC database using Oracle SQL and Microsoft Excel to pull key business metrics, validate data completeness, and support the company's cloud migration initiative.</p>
            </div>
            <div className="key-project-container">
              <p className="key-project-name">Python Script Converting Nested JSON to Excel File</p>
              <p className="key-project-desc">- Developed a Python script to transform complex, nested JSON files into structured Excel reports, improving data accessibility and enabling stakeholders to quickly interpret and analyze large datasets.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RNDC