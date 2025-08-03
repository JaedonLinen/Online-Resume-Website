import React, { useState } from 'react';
import './Professional.css'

function Professional() {

  const [event1, setevent1] = useState(false);
  const [event2, setevent2] = useState(false);
  const [event3, setevent3] = useState(false);
  const [event4, setevent4] = useState(false);
  const [event5, setevent5] = useState(false);

  const setAllFalse = () => {
    setevent1(false)
    setevent2(false)
    setevent3(false)
    setevent4(false)
    setevent5(false)
  }

  return (
    <div className='professional-section'>
        <div className="pro-title">
          <p className="pro-title-text">Professional Experience</p>
        </div>
        <div className="timeline-wrapper">
          <ul className="timeline">
            <li data-date="May 05, 2021" onClick={() => {setAllFalse(),setevent1(!event1)}}>
              <span className='event-title'>Graduated High school</span>
              <div className={`data ${event1 ? 'show' : ''}`}>
                <h3>Graduated High School</h3>
                <small>May 05, 2021</small>
                <p>I earned my high school diploma from Newton College & Career Academy in 2021, laying a strong foundation for my academic and professional journey. I enrolled at Kennesaw State University to pursue higher education.</p>
              </div>
            </li>
            <li data-date="Aug 16, 2021" onClick={() => {setAllFalse(),setevent2(!event2)}}>
              <span className='event-title'>Freshman Year at KSU</span>
              <div className={`data ${event2 ? 'show' : ''}`}>
                <h3>Freshman Year at KSU!</h3>
                <small>Aug 16, 2021</small>
                <p>Began freshman year at Kennesaw State University and declared Software Engineering as my major to pursue a career in tech. I chose to major in Software Engineering to align with my passion for technology and problem-solving.</p>
              </div>
            </li>
            <li data-date="May 08, 2023" onClick={() => {setAllFalse(),setevent3(!event3)}}>
              <span className='event-title'>IT Data Analyst Internship</span>
              <div className={`data ${event3 ? 'show' : ''}`}>
                <h3>IT Data analyst Intern at RNDC</h3>
                <small>May 08, 2023 - Aug 07, 2023 ... 3mo </small>
                <p>My first real work experience was an IT Data Analyst internship at Republic National Distributing Company (RNDC) during the summer of 2023. I worked with millions of supplier and consumer records to support the company's data integrity in cloud migration efforts. I also developed a Python program to convert complex nested JSON files into structured Excel reports for easier analysis.</p>
              </div>
            </li>
            <li data-date="May 06, 2024" onClick={() => {setAllFalse(),setevent4(!event4)}}>
              <span className='event-title'>Digital Manufacturing Analyst Co-op</span>
              <div className={`data ${event4 ? 'show' : ''}`}>
                <h3>Digital Manufacturing Analyst Co-op</h3>
                <small>May 06, 2024 - Aug 08, 2025 ... 1yr 3mo </small>
                <p>This was my second work experience, a Digital Manufacturing IT Internship at Smurfit WestRock starting in May 2024. I worked on cloud-based data solutions using AWS Glue, DMS, and Redshift, helping transform and migrate data models. I also developed reporting tools in Oracle APEX and supported QA testing for Tulip applications, improving both data visibility and application reliability.</p>
              </div>
            </li>
            <li data-date="May 08, 2025" onClick={() => {setAllFalse(),setevent5(!event5)}}>
              <span className='event-title'>Graduated Undergraduate at KSU</span>
              <div className={`data ${event5 ? 'show' : ''}`}>
                <h3>Graduated undergraduate at KSU</h3>
                <small>May 08, 2025</small>
                <p>I graduated from Kennesaw State University with a Bachelor’s degree in Software Engineering and a minor in Computer Science. During my undergraduate studies, I completed internships at RNDC and Smurfit WestRock, gaining hands-on experience in data analytics, cloud computing, and application development. These roles helped solidify my technical foundation and prepared me for a career in data and software engineering.</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Professional