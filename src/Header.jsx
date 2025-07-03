import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 bg-white z-[9999] flex items-center justify-between w-full mx-auto px-4 sm:px-6 py-8 max-w-full">
        <div className="logo flex items-center gap-2 font-semibold text-2xl select-none flex-shrink-0" aria-label="Positivus logo">
          <img
            src="https://i.postimg.cc/yNNs5MWS/Icon.png"
            alt="Positivus logo icon"
            className="w-8 h-8 flex-shrink-0"
            width="32"
            height="32"
          />
          <span>Positivus</span>
        </div>
        <nav
          role="navigation"
          aria-label="Primary navigation"
          className="hidden md:flex gap-12 text-base font-normal"
        >
          <a href="#about-us" className="no-underline text-black hover:underline">
            About us
          </a>
          <a href="#services" className="no-underline text-black hover:underline">
            Services
          </a>
          <a href="#use-cases" className="no-underline text-black hover:underline">
            Use Cases
          </a>
          <a href="#pricing" className="no-underline text-black hover:underline">
            Pricing
          </a>
          <a href="#blog" className="no-underline text-black hover:underline">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#request-quote"
            className="request-quote hidden md:flex border border-black rounded-lg px-6 py-2.5 text-base font-normal text-black bg-transparent whitespace-nowrap hover:bg-gray-100"
          >
            Request a quote
          </a>
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-700 hover:border-gray-700 z-[10000]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </header>
      {menuOpen && (
        <section className="md:hidden bg-white border-t border-black px-4 py-4 z-[9999] fixed top-[64px] left-0 right-0">
          <nav
            role="navigation"
            aria-label="Mobile primary navigation"
            className="flex flex-col gap-4 text-base font-normal"
          >
            <a href="#about-us" className="no-underline text-black hover:underline" onClick={() => setMenuOpen(false)}>
              About us
            </a>
            <a href="#services" className="no-underline text-black hover:underline" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#use-cases" className="no-underline text-black hover:underline" onClick={() => setMenuOpen(false)}>
              Use Cases
            </a>
            <a href="#pricing" className="no-underline text-black hover:underline" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#blog" className="no-underline text-black hover:underline" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
            <a
              href="#request-quote"
              className="request-quote inline-block border border-black rounded-lg px-6 py-2.5 text-base font-normal text-black bg-transparent whitespace-nowrap hover:bg-gray-100"
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
