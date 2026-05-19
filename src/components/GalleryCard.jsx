import React from 'react';
import '../pages/gallery/gallery.css';

const GalleryCard = ({ image }) => {
  return (
    <div className="gallery-card">
      <div className="gallery-card-container">
        {/* Image Block */}
        <div className="gallery-card-image-wrapper">
          <div 
            className="gallery-card-bg" 
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        
        {/* Metadata Block (with internal grid lines, no text) */}
        <div className="gallery-card-metadata">
          <div className="metadata-grid-line"></div>
          <div className="metadata-grid-line"></div>
          <div className="metadata-grid-line"></div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
