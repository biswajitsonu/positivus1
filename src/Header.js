import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between w-full mx-auto px-4 sm:px-6 py-8 max-w-full">
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
        <a href="#" className="no-underline text-black hover:underline">
          About us
        </a>
        <a href="#services" className="no-underline text-black hover:underline">
          Services
        </a>
        <a href="#" className="no-underline text-black hover:underline">
          Use Cases
        </a>
        <a href="#" className="no-underline text-black hover:underline">
          Pricing
        </a>
        <a href="#" className="no-underline text-black hover:underline">
          Blog
        </a>
      </nav>
      <a
        href="#"
        className="request-quote inline-block border border-black rounded-lg px-6 py-2.5 text-base font-normal text-black bg-transparent whitespace-nowrap hover:bg-gray-100"
      >
        Request a quote
      </a>
    </header>
  );
}

export default Header;
