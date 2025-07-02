import React from 'react';

function CaseStudies() {
  return (
<div className="mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10">
        <h2 className="bg-[#B9FF6B] rounded-md px-3 py-1 text-black font-extrabold text-3xl leading-8 select-none">
          Case Studies
        </h2>
        <p className="text-black text-base leading-5 max-w-xl">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-[#161820] rounded-3xl p-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white text-base leading-5 min-h-[18rem]">
        <div className="flex flex-col justify-between">
          <p className="mb-6">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a
            href="#"
            className="text-[#B9FF6B] inline-flex items-center font-normal text-base leading-5"
          >
            <span>Learn more</span>
            <svg
              className="ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#B9FF6B"
              strokeWidth="2"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col justify-between border-l border-r border-[#3A3D4D] px-6">
          <p className="mb-6">
            For a B2B software company, we developed an SEO strategy that resulted
            in a first page ranking for key keywords and a 200% increase in
            organic traffic.
          </p>
          <a
            href="#"
            className="text-[#B9FF6B] inline-flex items-center font-normal text-base leading-5"
          >
            <span>Learn more</span>
            <svg
              className="ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#B9FF6B"
              strokeWidth="2"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col justify-between pl-6">
          <p className="mb-6">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a
            href="#"
            className="text-[#B9FF6B] inline-flex items-center font-normal text-base leading-5"
          >
            <span>Learn more</span>
            <svg
              className="ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#B9FF6B"
              strokeWidth="2"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
