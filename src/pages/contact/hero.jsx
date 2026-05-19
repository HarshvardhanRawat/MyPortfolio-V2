import React from 'react';
import './contact.css';

const ContactHero = () => {
  return (
    <section className="contact-hero">
      {/* Content Layout */}
      <div className="contact-hero-content-grid">
        {/* Header Row */}
        <div className="contact-hero-header-wrapper fade-in">
          <h1 className="contact-hero-title">say hello</h1>
          
          <div className="contact-hero-icon-wrapper">
            <div className="contact-hero-icon">
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>

        {/* Description Row */}
        <div className="contact-hero-description-wrapper slide-up">
          <p className="contact-hero-description">
            let's collaborate. feel free to drop<br />
            me a line about your project or<br />
            follow me on social networks
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
