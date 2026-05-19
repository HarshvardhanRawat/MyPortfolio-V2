import React from 'react';
import './project.css';

// Custom SVG Placeholders matching the reference image style
const Logo1 = () => (
  <svg width="70" height="35" viewBox="0 0 70 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 26 L22 10 L38 10 L28 26 Z" fill="#222" />
    <path d="M38 26 L48 10 L64 10 L54 26 Z" fill="#222" />
    <path d="M10 24 L20 8 L36 8 L26 24 Z" fill="white" />
    <path d="M36 24 L46 8 L62 8 L52 24 Z" fill="white" />
    <circle cx="58" cy="14" r="2.5" fill="white" />
  </svg>
);

const Logo2 = () => (
  <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 25 L15 5 H25 L15 25 H5Z" fill="white" opacity="0.8" />
    <path d="M20 25 L30 5 H40 L30 25 H20Z" fill="white" opacity="0.8" />
    <path d="M35 25 L45 5 H55 L45 25 H35Z" fill="white" opacity="0.8" />
  </svg>
);

const Logo3 = () => (
  <svg width="90" height="45" viewBox="0 0 90 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="22" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="900" letterSpacing="-0.05em">LOGO!</text>
    <text x="50%" y="36" dominantBaseline="middle" textAnchor="middle" fill="#666" fontSize="10" fontWeight="700" letterSpacing="0.1em">IPSUM</text>
  </svg>
);

const Logo4 = () => (
  <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="7" width="14" height="14" fill="white" opacity="0.9" />
    <circle cx="31" cy="14" r="7" fill="white" opacity="0.9" />
    <circle cx="49" cy="14" r="7" fill="white" opacity="0.9" />
    <text x="64" y="18" fill="white" fontSize="11" fontWeight="700" letterSpacing="-0.02em">logoipsum</text>
  </svg>
);

const Logo5 = () => (
  <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="21" fill="white" fontSize="18" fontWeight="800" letterSpacing="-0.05em">LO</text>
    <circle cx="42" cy="15" r="8" stroke="white" strokeWidth="2.5" fill="none" />
    <circle cx="53" cy="15" r="8" stroke="white" strokeWidth="2.5" fill="none" />
  </svg>
);

const Logo6 = () => (
  <svg width="100" height="35" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="17" r="10" stroke="white" strokeWidth="1.5" fill="none" />
    <ellipse cx="15" cy="17" rx="4" ry="10" stroke="white" strokeWidth="1" fill="none" />
    <line x1="5" y1="17" x2="25" y2="17" stroke="white" strokeWidth="1" />
    <text x="32" y="16" fill="white" fontSize="10" fontWeight="700" letterSpacing="-0.02em">logo—</text>
    <text x="32" y="26" fill="white" fontSize="10" fontWeight="700" letterSpacing="-0.02em">ipsum</text>
  </svg>
);

const Logo7 = () => (
  <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" letterSpacing="0.05em">IPSUM</text>
  </svg>
);

const Logo8 = () => (
  <svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="50" height="30" rx="15" stroke="white" strokeWidth="2" fill="none" />
    <rect x="13" y="12" width="34" height="16" rx="8" stroke="white" strokeWidth="1.5" fill="none" />
    <rect x="21" y="18" width="18" height="4" rx="2" fill="white" />
  </svg>
);

const Logos = () => {
  return (
    <section className="logos-section">
      {/* Top Border with Monospace Label */}
      <div className="logos-top-bar">
        <span className="logos-label">.logos</span>
      </div>
      
      {/* Alternating Grid Layout for Logos */}
      <div className="logos-grid">
        {/* Row 1 */}
        <div className="logo-cell"><Logo1 /></div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell"><Logo3 /></div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell"><Logo5 /></div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell"><Logo7 /></div>
        <div className="logo-cell empty"></div>

        {/* Row 2 */}
        <div className="logo-cell empty"></div>
        <div className="logo-cell"><Logo2 /></div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell"><Logo4 /></div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell"><Logo6 /></div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell"><Logo8 /></div>
      </div>

      {/* Decorative Bottom Right Icon */}
      <div className="logos-bottom-icon">
        <div className="line"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default Logos;
