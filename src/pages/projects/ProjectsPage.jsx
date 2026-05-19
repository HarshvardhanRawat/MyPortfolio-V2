import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import HeroSection from './hero';
import Logos from './logos';
import GridBackground from '../../components/GridBackground';

const ProjectsPage = () => {
  return (
    <>
      <GridBackground />
      <Navbar />
      
      <main id="projects-page">
        <HeroSection />
        <Logos />
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
