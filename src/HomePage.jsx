import React from 'react';

function HomePage() {
  return (
    <>
<main id="about-us" className="flex flex-col md:flex-row justify-center w-full px-20 flex-1 min-h-[calc(100vh-160px)] gap-48 bg-white text-black">
        <section className="text-section max-w-lg flex flex-col justify-center" aria-label="Main text content">
          <h1 className="font-semibold text-6xl leading-snug mb-8">
            Navigating the
            <br />
            digital landscape
            <br />
            for success
          </h1>
          <p className="mb-12 max-w-lg leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button
            type="button"
            className="bg-black text-white rounded-lg px-8 py-4 text-lg font-semibold border-none cursor-pointer self-start hover:bg-gray-700 transition-colors"
          >
            Book a consultation
          </button>
        </section>
        <section className="image-section flex flex-col justify-center items-center flex-1 gap-8" aria-label="Illustration">
          <div className="w-[28rem] h-[28rem]">
            <img
              src="Illustration.png"
              alt="Illustration of a megaphone with orbiting circles and icons for heart, share, play, and location, with black and lime green colors"
              width="384"
              height="384"
              className="w-full h-full object-contain block"
            />
          </div>
        </section>
      </main>
      <footer className="flex justify-between items-center py-8 bg-white w-full mx-auto px-4 sm:px-6">
        <div className="w-36 h-12 flex justify-center items-center cursor-pointer hover:opacity-80">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-36 h-12 flex justify-center items-center cursor-pointer hover:opacity-80">
          <img
            src="https://1000logos.net/wp-content/uploads/2025/03/Dribbble-Logo.jpg"
            alt="Dribbble"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-36 h-12 flex justify-center items-center cursor-pointer hover:opacity-80">
          <img
            src="https://1000logos.net/wp-content/uploads/2022/12/HubSpot-Logo-2006.png"
            alt="HubSpot"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-36 h-12 flex justify-center items-center cursor-pointer hover:opacity-80">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-36 h-12 flex justify-center items-center cursor-pointer hover:opacity-80">
          <img
            src="https://cdn-public.softwarereviews.com/production/logos/offering_score_snapshots/75841/original/Notion_logo.png?1736520371"
            alt="Notion"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="w-36 h-12 flex justify-center items-center cursor-pointer hover:opacity-80">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png"
            alt="Zoom"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </footer>
    </>
  );
}

export default HomePage;
