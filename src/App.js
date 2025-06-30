import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Services from './Services';
import CallToAction from './CallToAction';
import CaseStudies from './CaseStudies';
import WorkingProcess from './WorkingProcess';
import TeamSection from './TeamSection';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <section id="services">
        <Services />
      </section>
      <CallToAction />
      <CaseStudies />
      <WorkingProcess />
      <TeamSection />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
