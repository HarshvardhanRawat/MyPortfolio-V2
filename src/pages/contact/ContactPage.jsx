import React from 'react';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import ContactHero from './hero';
import ContactForm from './contactForm';
import Socials from './social';

export default function ContactPage() {
  return (
    <>
      <GridBackground />
      <Navbar />

      <main id="contact-page">
        <ContactHero />
        <div className="contact-main-content">
          <ContactForm />
          <Socials />
        </div>
      </main>

      <Footer />
    </>
  );
}
