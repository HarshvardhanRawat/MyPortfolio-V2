import React from 'react';
import GalleryCard from '../../components/GalleryCard';
import './gallery.css';

// Import local photography assets
import imgNopal from '../../assets/gallery_nopal.png';
import imgTierraViva from '../../assets/gallery_tierraviva.png';
import imgFabric from '../../assets/gallery_fabric.png';
import imgStone from '../../assets/gallery_stone.png';

const galleryItems = [
  {
    id: 1,
    image: imgNopal
  },
  {
    id: 2,
    image: imgTierraViva
  },
  {
    id: 3,
    image: imgFabric
  },
  {
    id: 4,
    image: imgStone
  }
];

const GalleryGrid = () => {
  return (
    <section className="gallery-grid-section">
      <div className="gallery-main-grid">
        {galleryItems.map((item) => (
          <GalleryCard
            key={item.id}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;


