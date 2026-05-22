import React from 'react';
import Lanyard from '../../components/lanyard/Lanyard';
import './about.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-grid">
          <div className="about-hero-left">
            <h1 className="about-page-title">about</h1>
            <div className="about-hero-content">
              <h2 className="about-hero-headline">
                i'm a developer, creator, visual storyteller, and coffee lover obsessed with the world of digital
              </h2>
            </div>
          </div>
          <div className="about-hero-right">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>

        {/* Decorative element */}
        <div className="about-decorative-target">
          <div className="target-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
