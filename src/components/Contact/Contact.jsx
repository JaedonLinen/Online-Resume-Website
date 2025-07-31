import React from 'react'
import './Contact.css'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaFileDownload  } from "react-icons/fa";



function Contact() {
  return (
    <div className='contact-section'>
        <div className="con-title">
          <p className="con-title-text">Contact Information</p>
        </div>
        <div className="con-attn">
          <p className="con-attn-header">Get in touch<span>.</span></p>
          <p className="con-attn-subheader">I would love to hear from you!</p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jaedon-linen-77581a24a/" target="_blank" rel="noopener noreferrer" className="clickable-icon">
            <RiLinkedinBoxFill />
          </a>
          <a href="mailto:jaedonlinenimp@yahoo.com" className="clickable-icon">
            <IoIosMail />
          </a>
          <a href="https://github.com/JaedonLinen" target="_blank" rel="noopener noreferrer" className="clickable-icon">
            <FaGithub />
          </a>
          <div className="icon-resume-wrapper">
            <a href="/IMP-Resume(07_02_25).pdf" target="_blank" rel="noopener noreferrer" className="clickable-icon">
              <FaFileDownload />
            </a>
            <div className="resume">
              <p>Click to view resume</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact