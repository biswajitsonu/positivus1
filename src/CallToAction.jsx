import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="calltoaction-section" aria-label="Call to action">
      <div className="calltoaction-text">
        <h2 className="calltoaction-title">
          Let’s make things happen
        </h2>
        <p className="calltoaction-description">
          Contact us today to learn more about how our digital marketing services
          can help your business grow and succeed online.
        </p>
        <button className="calltoaction-button">
          Get your free proposal
        </button>
      </div>
      <div className="calltoaction-image-container">
        <img
          alt="Colorful abstract digital marketing illustration with stars and shapes"
          className="calltoaction-image"
          src="https://i.postimg.cc/7hgpmmxt/Illustration-4.png"
        />
      </div>
    </section>
  );
}

export default CallToAction;
