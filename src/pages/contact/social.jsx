import React from 'react';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import './contact.css';

const Socials = () => {
  const socialList = [
    {
      id: 'twitter',
      name: 'twitter',
      handle: '@stfnco',
      url: 'https://twitter.com/stfnco',
      icon: <FaTwitter size={20} />
    },
    {
      id: 'instagram',
      name: 'instagram',
      handle: '@stfnco',
      url: 'https://instagram.com/stfnco',
      icon: <FaInstagram size={20} />
    },
    {
      id: 'tiktok',
      name: 'tiktok',
      handle: '@stfnco',
      url: 'https://tiktok.com/@stfnco',
      icon: <FaTiktok size={20} />
    },
    {
      id: 'youtube',
      name: 'youtube',
      handle: '@stfnco',
      url: 'https://youtube.com',
      icon: <FaYoutube size={20} />
    }
  ];

  return (
    <div className="contact-social-grid">
      <div className="socials-list">
        {socialList.map((item) => (
          <a 
            key={item.id} 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-item-row"
          >
            {/* Left Box: Icon and Details */}
            <div className="social-item-content">
              <div className="social-icon-box">
                {item.icon}
              </div>
              <div className="social-details">
                <span className="social-name">{item.name}</span>
                <span className="social-handle">{item.handle}</span>
              </div>
            </div>

            {/* Right Box: Target Line Badge */}
            <div className="social-badge-col">
              <div className="social-badge-line"></div>
              <div className="social-badge-circle"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
