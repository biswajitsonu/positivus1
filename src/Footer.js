import React from 'react';

function Footer() {
  return (
    <footer className="rounded-2xl bg-[#12151e] p-6 md:p-10 max-w-full w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div className="flex items-center space-x-3 mb-8 md:mb-0">
          <img
            alt="White star icon representing Positivus logo"
            className="w-7 h-7"
            height="28"
            src="https://i.postimg.cc/MG0q5630/Icon-1.png"
            width="28"
          />
          <span className="font-semibold text-white text-xl">Positivus</span>
        </div>
        <nav className="flex space-x-8 text-base font-normal">
          <a className="hover:text-white" href="#">
            About us
          </a>
          <a className="hover:text-white" href="#">
            Services
          </a>
          <a className="hover:text-white" href="#">
            Use Cases
          </a>
          <a className="hover:text-white" href="#">
            Pricing
          </a>
          <a className="hover:text-white" href="#">
            Blog
          </a>
        </nav>
        <div className="flex space-x-4 mt-8 md:mt-0 text-xl">
          <a
            aria-label="LinkedIn"
            className="text-black bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#a6f84a] hover:text-black transition-colors"
            href="#"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            aria-label="Facebook"
            className="text-black bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#a6f84a] hover:text-black transition-colors"
            href="#"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            aria-label="Twitter"
            className="text-black bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#a6f84a] hover:text-black transition-colors"
            href="#"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
        <div className="text-white text-base max-w-xs md:max-w-[360px]">
          <p className="mb-5 font-semibold text-black inline-block bg-[#a6f84a] px-2 py-1 text-lg">
            Contact us:
          </p>
          <p className="mb-4">Email: info@positivus.com</p>
          <p className="mb-4">Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
        <form className="flex space-x-6 w-full max-w-3xl bg-[#22232b] rounded-xl p-8 md:p-10">
          <input
            type="email"
            required
            placeholder="Email"
            className="flex-grow rounded-lg border border-white border-opacity-50 bg-transparent px-5 py-4 text-white placeholder-white text-base focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="bg-[#a6f84a] rounded-lg px-8 py-4 text-black font-normal hover:bg-[#8bd22f] transition-colors text-base"
          >
            Subscribe to news
          </button>
        </form>
      </div>
      <hr className="border-t border-white border-opacity-20 my-8" />
      <div className="flex flex-col md:flex-row md:justify-start md:items-center text-white text-base font-normal space-x-4">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a className="underline underline-offset-2 hover:text-white" href="#">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
