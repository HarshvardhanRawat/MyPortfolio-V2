import React from 'react';
import './gallery.css';

const GalleryHero = () => {
    return (
        <section className="gallery-hero">
            {/* Content Layout */}
            <div className="gallery-hero-content-grid">
                {/* Header Row */}
                <div className="gallery-hero-header-wrapper fade-in">
                    <h1 className="gallery-hero-title">gallery</h1>

                    <div className="gallery-hero-icon-wrapper">
                        <div className="gallery-hero-icon">
                            <div className="line"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryHero;
