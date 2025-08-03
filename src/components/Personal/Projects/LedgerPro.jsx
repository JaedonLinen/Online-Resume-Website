import React from 'react'
import '../Personal.css'
import grad from '../../../assets/grad.png';
import react from '../../../assets/React-icon.svg.png';
import python from '../../../assets/Python.png';
import postgres from '../../../assets/Postgresql.png';
import git from '../../../assets/git.png';
import render from '../../../assets/render.png';

function LedgerPro() {
  return (
    <div className="individual-project">
        <div className="project-title">
            <p className="project-title-text">Ledger Pro - Accounting & Finance Platform</p>
            <div className="subtitle-content">
                <p className="project-subtitle">Full-Stack Development</p>
                <p className="project-date">May 2025</p>
            </div>
        </div>
        <div className="project-content">
            <div className="project-visuals">
                <img src={grad} alt="" />
            </div>
            <div className="project-desc">
                <div className="project-desc-text-container">
                    <p className="project-desc-text">From January to May 2025, I led full-stack development on Ledger Pro, a user-friendly accounting platform designed to match enterprise tools. Key features allowed users to chart accounts, post transactions, run trial balances, and generate income and balance sheets with built-in financial analysis. I built a secure Python API connected to a PostgreSQL database hosted on Render to handle account creation, password checks, and transaction journalization. Ledger Pro is fast, secure, and built for real-world use.</p>
                </div>
                <div className="framework-section">
                    <p>Framework :</p>
                    <div className="framework-logos-section">
                        <div className="framework">
                            <img src={react} alt="" className='framework-icon'/>
                            <h6>React JS</h6>
                        </div>
                        <div className="framework">
                            <img src={python} alt="" className='framework-icon'/>
                            <h6>Python</h6>
                        </div>
                        <div className="framework">
                            <img src={postgres} alt="" className='framework-icon'/>
                            <h6>PostgreSQL</h6>
                        </div>
                        <div className="framework">
                            <img src={git} alt="" className='framework-icon'/>
                            <h6>Git</h6>
                        </div>
                        <div className="framework">
                            <img src={render} alt="" className='framework-icon'/>
                            <h6>Render</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LedgerPro