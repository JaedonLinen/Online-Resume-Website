import React, { useState } from 'react';
import './Education.css'
import Edu from './Education-section/Edu';
import Certs from './Certifications-section/Certs';
import Frameworks from './Frameworks-section/Frameworks';

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    <Edu key="edu" />,
    <Certs key="certs" />,
    <Frameworks key="frameworks" />
  ];

  const handleSwitch = (index) => {
    if (index === activeIndex) return; // ignore if same or already switching
      setActiveIndex(index);
      setIsSwitching(false);
  };

  return (
    <div className='Education-section-container'>
      <div className="education-sections">
        {sections[activeIndex]}
      </div>

      <div className="education-slider">
        <div className="slider-container">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`slider-circle ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleSwitch(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education;
