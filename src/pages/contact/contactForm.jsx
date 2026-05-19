import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-form-section">
      <form onSubmit={handleSubmit} className="contact-form-grid">
        
        {/* Name Row */}
        <div className="contact-form-row">
          <div className="contact-form-label-col">
            <label htmlFor="name">Name</label>
          </div>
          <div className="contact-form-input-col">
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
        </div>

        {/* Email Row */}
        <div className="contact-form-row">
          <div className="contact-form-label-col">
            <label htmlFor="email">Email</label>
          </div>
          <div className="contact-form-input-col">
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
        </div>

        {/* Message Row */}
        <div className="contact-form-row message-row">
          <div className="contact-form-label-col">
            <label htmlFor="message">Message</label>
          </div>
          <div className="contact-form-input-col">
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Submit Button Row */}
        <div className="contact-form-submit-row">
          <button type="submit" className="contact-submit-btn">
            Submit
          </button>
        </div>

      </form>
    </section>
  );
};

export default ContactForm;
