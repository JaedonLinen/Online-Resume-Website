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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum a nam qui explicabo commodi at maiores eveniet veniam, incidunt unde. Minus adipisci officiis asperiores hic exercitationem? Eos consectetur sequi sint.</p>
                <span className='close' onClick={setAllFalse}>Close</span>
              </div>
            </li>
            <li data-date="Aug 16, 2021" onClick={() => {setAllFalse(),setevent2(!event2)}}>
              <span className='event-title'>Freshman Year at KSU</span>
              <div className={`data ${event2 ? 'show' : ''}`}>
                <h3>Freshman Year at KSU</h3>
                <small>Aug 16, 2021</small>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum a nam qui explicabo commodi at maiores eveniet veniam, incidunt unde. Minus adipisci officiis asperiores hic exercitationem? Eos consectetur sequi sint.</p>
                <span className='close' onClick={setAllFalse}>Close</span>
              </div>
            </li>
            <li data-date="May 08, 2023" onClick={() => {setAllFalse(),setevent3(!event3)}}>
              <span className='event-title'>IT Data Analyst Internship</span>
              <div className={`data ${event3 ? 'show' : ''}`}>
                <h3>IT Data analyst Intern at RNDC</h3>
                <small>May 08, 2023 - Aug 07, 2023 </small>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolores eius vel, voluptatum, vero ipsam dolorum corporis, natus molestias distinctio vitae? Commodi iure eaque veritatis modi explicabo accusantium dignissimos eveniet.</p>
                <span className='close' onClick={setAllFalse}>Close</span>
              </div>
            </li>
            <li data-date="May 06, 2024" onClick={() => {setAllFalse(),setevent4(!event4)}}>
              <span className='event-title'>Digital Manufacturing Analyst Co-op</span>
              <div className={`data ${event4 ? 'show' : ''}`}>
                <h3>Digital Manufacturing Analyst Co-op</h3>
                <small>May 06, 2024 - Aug 05, 2023 </small>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolores eius vel, voluptatum, vero ipsam dolorum corporis, natus molestias distinctio vitae? Commodi iure eaque veritatis modi explicabo accusantium dignissimos eveniet.</p>
                <span className='close' onClick={setAllFalse}>Close</span>
              </div>
            </li>
            <li data-date="May 08, 2025" onClick={() => {setAllFalse(),setevent5(!event5)}}>
              <span className='event-title'>Graduated Undergraduate at KSU</span>
              <div className={`data ${event5 ? 'show' : ''}`}>
                <h3>Graduated undergraduate at KSU</h3>
                <small>May 08, 2025</small>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolores eius vel, voluptatum, vero ipsam dolorum corporis, natus molestias distinctio vitae? Commodi iure eaque veritatis modi explicabo accusantium dignissimos eveniet.</p>
                <span className='close' onClick={setAllFalse}>Close</span>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Professional