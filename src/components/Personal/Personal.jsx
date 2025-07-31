import React, { useRef, useState } from 'react';
import './Personal.css';
import LedgerPro from './Projects/LedgerPro';
import ResumeWebsite from './Projects/ResumeWebsite';

function Personal() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const hoverTimer = useRef(null);

  const [activeSection, setActiveSection] = useState(null); // track active section

  const scrollToSection = (ref, sectionName) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setActiveSection(sectionName);
  };

  const handleMouseEnterSection1 = () => {
    hoverTimer.current = setTimeout(() => {
      scrollToSection(section1Ref, 'section1');
    }, 1000);
  };

  const handleMouseLeaveSection1 = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  const handleMouseEnterSection2 = () => {
    hoverTimer.current = setTimeout(() => {
      scrollToSection(section2Ref, 'section2');
    }, 500);
  };

  const handleMouseLeaveSection2 = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  return (
    <div className="personal-section">
      <div className="personal-projects-container">
        <section
          ref={section1Ref}
          onMouseEnter={handleMouseEnterSection1}
          onMouseLeave={handleMouseLeaveSection1}
          className={activeSection === 'section1' ? 'section active' : 'section inactive'}
        >
          <div className="pers-title">
            <p className="pers-title-text">Personal Projects</p>
          </div>
          <LedgerPro />
        </section>
        <section
          ref={section2Ref}
          onMouseEnter={handleMouseEnterSection2}
          onMouseLeave={handleMouseLeaveSection2}
          className={activeSection === 'section2' ? 'section active' : 'section inactive'}
        >
          <ResumeWebsite />
        </section>
      </div>
    </div>
  );
}

export default Personal;
