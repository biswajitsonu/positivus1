import React from 'react';
import './HomePage.css';


function HomePage() {
  return (
    <>
      <main id="about-us" className="homepage-main" aria-label="Main content about us">
        <section className="text-section" aria-label="Main text content">
          <h1 className="main-title">
            Navigating the
            <br />
            digital landscape
            <br />
            for success
          </h1>
          <p className="main-description">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button
            type="button"
            className="consultation-button"
          >
            Book a consultation
          </button>
        </section>
        <section className="image-section" aria-label="Illustration">
          <div className="image-wrapper">
            <img
              src="Illustration.png"
              alt="Illustration of a megaphone with orbiting circles and icons for heart, share, play, and location, with black and lime green colors"
              width="384"
              height="384"
              className="illustration-image"
            />
          </div>
        </section>
      </main>
      
      <footer className="homepage-footer" aria-label="Partner logos">
        <div className="logo-container" tabIndex="0" role="img" aria-label="Amazon logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="partner-logo"
          />
        </div>
        <div className="logo-container" tabIndex="0" role="img" aria-label="Dribbble logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2025/03/Dribbble-Logo.jpg"
            alt="Dribbble"
            className="partner-logo"
          />
        </div>
        <div className="logo-container" tabIndex="0" role="img" aria-label="HubSpot logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2022/12/HubSpot-Logo-2006.png"
            alt="HubSpot"
            className="partner-logo"
          />
        </div>
        <div className="logo-container" tabIndex="0" role="img" aria-label="Netflix logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="partner-logo"
          />
        </div>
        <div className="logo-container" tabIndex="0" role="img" aria-label="Notion logo">
          <img
            src="https://cdn-public.softwarereviews.com/production/logos/offering_score_snapshots/75841/original/Notion_logo.png?1736520371"
            alt="Notion"
            className="partner-logo"
          />
        </div>
        <div className="logo-container" tabIndex="0" role="img" aria-label="Zoom logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png"
            alt="Zoom"
            className="partner-logo"
          />
        </div>
      </footer>
    </>
  );
}

export default HomePage;
