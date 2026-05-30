import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import AboutHero from './hero';
import Stats from './stats';
import AboutSection from './about';
import Experience from './experience';
import Stack from './stack';
import CTA from '../../sections/cta';
import useSEO from '../../hooks/useSEO';

const AboutPage = () => {
  useSEO({
    title: 'About',
    description: 'Learn about Harshvardhan Rawat (.rwt / dotrwt), a creative full-stack developer and designer crafting custom high-performance digital products.'
  });

  return (
    <>
      <Navbar />
      <main id="about-page">
        <AboutHero />
        <Stats />
        <AboutSection />
        <Experience />
        <Stack />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default AboutPage;
