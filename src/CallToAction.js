import React from 'react';

function CallToAction() {
  return (
<section className="bg-gray-100 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold mb-6 leading-tight">
          Let’s make things happen
        </h2>
        <p className="text-base leading-relaxed mb-8">
          Contact us today to learn more about how our digital marketing services
          can help your business grow and succeed online.
        </p>
        <button className="bg-gray-900 text-white rounded-lg px-6 py-3 text-base font-medium hover:bg-gray-800 transition">
          Get your free proposal
        </button>
      </div>
      <div className="flex-shrink-0 w-80 h-56 md:w-96 md:h-72">
        <img
          alt="Colorful abstract digital marketing illustration with stars and shapes"
          className="w-full h-full object-contain"
          src="https://i.postimg.cc/7hgpmmxt/Illustration-4.png"
        />
      </div>
    </section>
  );
}

export default CallToAction;
