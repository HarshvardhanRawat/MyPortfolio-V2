import React from 'react';
import './project.css';

const Hero = () => {
  return (
    <section className="project-hero">
      {/* Content Layout */}
      <div className="hero-content-grid">
        {/* Header Row */}
        <div className="hero-header-wrapper fade-in">
          <h1 className="hero-title">projects</h1>
          
          <div className="hero-icon-wrapper">
            <div className="hero-icon">
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>

        {/* Description Row */}
        <div className="hero-description-wrapper slide-up">
          <p className="hero-description">
            i design and develop digital<br />
            experiences focused on<br />
            interaction, visuals, and<br />
            thoughtful storytelling
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
