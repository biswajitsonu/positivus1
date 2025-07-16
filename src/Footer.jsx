import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img
            alt="White star icon representing Positivus logo"
            className="footer-logo-icon"
            height="28"
            src="https://i.postimg.cc/MG0q5630/Icon-1.png"
            width="28"
          />
          <span className="footer-logo-text">Positivus</span>
        </div>
        <nav className="footer-nav">
          <a className="footer-link" href="#about-us">
            About us
          </a>
          <a className="footer-link" href="#services">
            Services
          </a>
          <a className="footer-link" href="#use-cases">
            Use Cases
          </a>
          <a className="footer-link" href="#pricing">
            Pricing
          </a>
          <a className="footer-link" href="#blog">
            Blog
          </a>
        </nav>
        <div className="footer-social-links">
          <a
            aria-label="LinkedIn"
            className="footer-social-link"
            href="#"
          >
            <span className="footer-social-icon-circle">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </a>
          <a
            aria-label="Facebook"
            className="footer-social-link"
            href="#"
          >
            <span className="footer-social-icon-circle">
              <i className="fab fa-facebook-f"></i>
            </span>
          </a>
          <a
            aria-label="Twitter"
            className="footer-social-link"
            href="#"
          >
            <span className="footer-social-icon-circle">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-contact-form-section">
        <div className="footer-contact-info">
          <p className="footer-contact-label">
            Contact us:
          </p>
          <p className="footer-contact-item">Email: info@positivus.com</p>
          <p className="footer-contact-item">Phone: 555-567-8901</p>
          <p className="footer-contact-item">
            Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="footer-subscribe-container">
          <form className="footer-subscribe-form">
            <input
              type="email"
              required
              placeholder="Email"
              className="footer-input-email"
            />
            <button
              type="submit"
              className="footer-submit-button"
            >
              Subscribe to news
            </button>
          </form>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a className="footer-privacy-link" href="#">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
