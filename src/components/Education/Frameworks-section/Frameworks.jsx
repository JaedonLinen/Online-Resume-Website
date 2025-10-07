import React from 'react'
import './Frameworks.css'
import react from '../../../assets/React-icon.svg.png';
import python from '../../../assets/Python.png';
import postgres from '../../../assets/Postgresql.png';
import git from '../../../assets/git.png';

function Frameworks() {
  return (
    <div className='Frameworks'>
        <div className="pro-title">
            <p className="pro-title-text">Frameworks & Skills</p>
        </div>
        <div className="Framework-rows-container">
          <div className="framework-row one">
            <div className="f-row-title-con">
              <p className="f-row-title"><span>Programming</span> Languages/Libriares</p>
            </div>
            <div className="f-row-desc-con">
              <div className="bit">
                  <img src={react} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>React JS</h6>
              </div>
              <div className="bit">
                  <img src={python} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Python</h6>
              </div>
              <div className="bit">
                  <img src={git} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Git</h6>
              </div>
              <div className="bit">
                  <img src={postgres} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>SQL</h6>
              </div>
            </div>
          </div>
          <div className="framework-row two">
            <div className="f-row-desc-con"></div>
            <div className="f-row-title-con"><p className="f-row-title"><span>Applications</span></p></div>
          </div>
          <div className="framework-row three">
            <div className="f-row-title-con"><p className="f-row-title"><span>Non-Techincal</span> Skills</p></div>
            <div className="f-row-desc-con"></div>
          </div>
        </div>
    </div>
  )
}

export default Frameworks