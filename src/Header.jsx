import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles the mobile menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header" aria-label="Site header">
        <div className="logo" aria-label="Positivus logo">
          <img
            src="https://i.postimg.cc/yNNs5MWS/Icon.png"
            alt="Positivus logo icon"
            width="32"
            height="32"
          />
          <span>Positivus</span>
        </div>
        <nav
          role="navigation"
          aria-label="Primary navigation"
          className="nav-primary"
        >
          <a href="#about-us" className="nav-link">
            About us
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#use-cases" className="nav-link">
            Use Cases
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
        </nav>
        <div className="header-actions">
          <a
            href="#request-quote"
            className="request-quote"
          >
            Request a quote
          </a>
          <button
            className="menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="menu-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </header>
      {menuOpen && (
        <section className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <nav
            role="navigation"
            aria-label="Mobile primary navigation"
            className="mobile-nav"
          >
            <a href="#about-us" className="nav-link" onClick={() => setMenuOpen(false)}>
              About us
            </a>
            <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#use-cases" className="nav-link" onClick={() => setMenuOpen(false)}>
              Use Cases
            </a>
            <a href="#pricing" className="nav-link" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#blog" className="nav-link" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
            <a
              href="#request-quote"
              className="request-quote"
              onClick={() => setMenuOpen(false)}
            >
              Request a quote
            </a>
          </nav>
        </section>
      )}
    </>
  );
}

export default Header;
