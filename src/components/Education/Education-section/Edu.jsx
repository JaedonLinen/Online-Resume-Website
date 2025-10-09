import React from 'react'
import ksu from '../../../assets/ksu.svg';
import './Edu.css'

function Edu() {
  return (
    <div className='Edu'>
        <div className="pro-title">
            <p className="pro-title-text">Education</p>
        </div>
        <div className="education-panels">
            <div className="e-panel one">
                <img src={ksu} alt="" />
            </div>
            <div className="e-panel two">
                <div className="college-name">
                    <p>Kennesaw State University</p>
                </div>
                <div className="college-details">
                    <p className="college-details-text"><span>Degree: </span>Bachelor's of Science (BS)</p>
                    <p className="college-details-text"><span>Major: </span>Software Engineering</p>
                    <p className="college-details-text"><span>Minor: </span>Computer Science</p>
                    <p className="college-details-text"><span>Relevant Courses: </span></p>
                    <p className="college-details-text course">- Data Structures</p>
                    <p className="college-details-text course">- Cloud Computing</p>
                    <p className="college-details-text course">- Database Systems</p>
                    <p className="college-details-text course">- Software Project Management</p>
                    <p className="college-details-text course">- Parallel & Distributed Computing</p>
                    <p className="college-details-text"><span>Club(s): </span>Kennesaw State University Chapter of the National Society of Black Engineers (KSBE)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edu