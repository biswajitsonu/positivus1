import React from 'react';

function HomePage() {
  return (
    <>
      <main className="flex flex-col md:flex-row justify-center w-full px-20 flex-1 min-h-[calc(100vh-160px)] gap-48 bg-white text-black">
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
      <footer>
        <img
          src="https://i.postimg.cc/zBRd1WXY/Logotypes.png"
          alt="Logotypes of various companies in black and gray"
          className="w-full object-contain"
        />
      </footer>
    </>
  );
}

export default HomePage;
