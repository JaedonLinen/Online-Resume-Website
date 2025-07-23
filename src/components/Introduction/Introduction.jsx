import React, { useState } from 'react';
import grad from '../../assets/grad.png';
import wed from '../../assets/wedding.jpeg';
import champ from '../../assets/champ.jpeg';
import './Introduction.css';

function Introduction() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  const slides = [grad, wed, champ];
  const totalSlides = slides.length;

  const handleSlideChange = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFade(false);
    }, 300); // Duration matches the CSS fade time
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % totalSlides);
  };
  
  return (
    <div className='introduction-section'>
      <div className="intro-text">
        <div className="intro-title">
          <p className="intro-title-text">Introduction</p>
        </div>
        <div className="intro-name">
          <p className="hello">Hello, My name is</p>
          <p className="name">Jaedon Linen</p>
        </div>
        <div className="intro-desc">
          <p className="intro-desc-text">I'm a recent Software Engineering graduate from Kennesaw State University with experience in data engineering and full-stack development. I’ve built data pipelines using AWS and Redshift, created reporting tools with Oracle APEX, and developed a finance app using Python and PostgreSQL. I’m skilled in Python, SQL, React, and tools like Databricks and Azure DevOps. Now that I’ve graduated, I’m looking for a full-time role where I can use my skills to help solve real-world problems.</p>
        </div>
      </div>
      <div className="intro-images">
        <button className='prev' onClick={prevSlide}>&#10094;</button>
        <div className="slides">
          <div className={`slide ${fade ? 'fade' : ''}`}>
            <img src={slides[currentSlide]} alt="" />
            <p className="img-desc">
              {currentSlide === 0 && 'Graduation picture'}
              {currentSlide === 1 && 'Me at my brothers wedding'}
              {currentSlide === 2 && 'Me winning intramural champion'}
            </p>
          </div>
        </div>
        <button className='next' onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  )
}

export default Introduction