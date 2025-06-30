import React from 'react';

function Services() {
  return (
<section className="bg-white p-6 sm:p-10 md:p-16 mb-12">
      <div>
        <header className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-10">
          <h1 className="inline-block bg-[#A9FF66] rounded-md font-extrabold text-lg sm:text-xl px-2 py-1 leading-tight">
            Services
          </h1>
          <p className="mt-3 sm:mt-0 text-sm sm:text-base max-w-xl text-black">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </header>
<section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <article className="flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-gray-400 bg-[#F3F3F3] p-6 sm:p-8 shadow-[0_6px_0_0_rgba(0,0,0,0.3)]">
            <div className="max-w-[180px] sm:max-w-[220px] relative">
              <h2 className="inline-block bg-[#A9FF66] rounded-md font-medium text-base leading-tight px-1 py-0.5">
                Search engine
                <br />
                optimization
              </h2>
              <button
                aria-label="Learn more about Search engine optimization"
                className="mt-6 flex items-center gap-2 text-gray-900 text-sm font-normal relative"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-[#A9FF66] relative">
                  <i className="fas fa-arrow-up-right z-10 relative"></i>
                  <svg
                    className="arrow-svg btn-arrow-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 12h8M12 4l8 8-8 8"></path>
                  </svg>
                </span>
                Learn more
              </button>
            </div>
            <img
              alt="Illustration of a magnifying glass with digital marketing icons representing search engine optimization"
              className="mt-6 sm:mt-0 sm:ml-6 max-w-[160px] sm:max-w-[200px] object-contain"
              height="100"
              src="https://i.postimg.cc/BndXKnVS/Illustration-1.png"
              width="160"
            />
          </article>
          {/* Card 2 */}
          <article className="flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-gray-400 bg-[#A9FF66] p-6 sm:p-8 shadow-[0_6px_0_0_rgba(0,0,0,0.3)]">
            <div className="max-w-[180px] sm:max-w-[220px] relative">
              <h2 className="inline-block bg-white rounded-md font-medium text-base leading-tight px-1 py-0.5">
                Pay-per-click
                <br />
                advertising
              </h2>
              <button
                aria-label="Learn more about Pay-per-click advertising"
                className="mt-6 flex items-center gap-2 text-gray-900 text-sm font-normal relative"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-[#A9FF66] relative">
                  <i className="fas fa-arrow-up-right z-10 relative"></i>
                  <svg
                    className="arrow-svg btn-arrow-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 12h8M12 4l8 8-8 8"></path>
                  </svg>
                </span>
                Learn more
              </button>
            </div>
            <img
              alt="Illustration of a web browser window with a large cursor clicking, representing pay-per-click advertising"
              className="mt-6 sm:mt-0 sm:ml-6 max-w-[160px] sm:max-w-[200px] object-contain"
              height="100"
              src="https://i.postimg.cc/26CjQbFD/tokyo-selecting-a-value-in-the-browser-window-1.png"
              width="160"
            />
          </article>
          {/* Card 3 */}
          <article className="flex flex-col sm:flex-row items-center justify-between rounded-3xl bg-[#12131A] p-6 sm:p-8 shadow-[0_6px_0_0_rgba(0,0,0,0.3)]">
            <div className="max-w-[180px] sm:max-w-[220px] relative">
              <h2 className="inline-block bg-white rounded-md font-medium text-base leading-tight px-1 py-0.5 text-black">
                Social Media
                <br />
                Marketing
              </h2>
              <button
                aria-label="Learn more about Social Media Marketing"
                className="mt-6 flex items-center gap-2 text-white text-sm font-normal relative"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black relative">
                  <i className="fas fa-arrow-up-right z-10 relative"></i>
                  <svg
                    className="arrow-svg btn-arrow-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 12h8M12 4l8 8-8 8"></path>
                  </svg>
                </span>
                Learn more
              </button>
            </div>
            <img
              alt="Illustration of a social media interface with hearts and star ratings representing social media marketing"
              className="mt-6 sm:mt-0 sm:ml-6 max-w-[160px] sm:max-w-[200px] object-contain"
              height="100"
              src="https://i.postimg.cc/GpCbR8fy/Illustration-2.png"
              width="160"
            />
          </article>
          {/* Card 4 */}
          <article className="flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-gray-400 bg-[#F3F3F3] p-6 sm:p-8 shadow-[0_6px_0_0_rgba(0,0,0,0.3)]">
            <div className="max-w-[180px] sm:max-w-[220px] relative">
              <h2 className="inline-block bg-[#A9FF66] rounded-md font-medium text-base leading-tight px-1 py-0.5">
                Email
                <br />
                Marketing
              </h2>
              <button
                aria-label="Learn more about Email Marketing"
                className="mt-6 flex items-center gap-2 text-gray-900 text-sm font-normal relative"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-[#A9FF66] relative">
                  <i className="fas fa-arrow-up-right z-10 relative"></i>
                  <svg
                    className="arrow-svg btn-arrow-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 12h8M12 4l8 8-8 8"></path>
                  </svg>
                </span>
                Learn more
              </button>
            </div>
            <img
              alt="Illustration of two black ovals with flying envelopes representing email marketing"
              className="mt-6 sm:mt-0 sm:ml-6 max-w-[160px] sm:max-w-[200px] object-contain"
              height="100"
              src="https://i.postimg.cc/XYMbKB4z/tokyo-sending-messages-from-one-place-to-another-1.png"
              width="160"
            />
          </article>
          {/* Card 5 */}
          <article className="flex flex-col sm:flex-row items-center justify-between rounded-3xl bg-[#A9FF66] p-6 sm:p-8 shadow-[0_6px_0_0_rgba(0,0,0,0.3)]">
            <div className="max-w-[180px] sm:max-w-[220px] relative">
              <h2 className="inline-block bg-white rounded-md font-medium text-base leading-tight px-1 py-0.5">
                Content
                <br />
                Creation
              </h2>
              <button
                aria-label="Learn more about Content Creation"
                className="mt-6 flex items-center gap-2 text-gray-900 text-sm font-normal relative"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-[#A9FF66] relative">
                  <i className="fas fa-arrow-up-right z-10 relative"></i>
                  <svg
                    className="arrow-svg btn-arrow-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 12h8M12 4l8 8-8 8"></path>
                  </svg>
                </span>
                Learn more
              </button>
            </div>
            <img
              alt="Illustration of many browser windows with different information representing content creation"
              className="mt-6 sm:mt-0 sm:ml-6 max-w-[160px] sm:max-w-[200px] object-contain"
              height="100"
              src="https://i.postimg.cc/bvgfj6b7/tokyo-many-browser-windows-with-different-information-1.png"
              width="160"
            />
          </article>
          {/* Card 6 */}
          <article className="flex flex-col sm:flex-row items-center justify-between rounded-3xl bg-[#12131A] p-6 sm:p-8 shadow-[0_6px_0_0_rgba(0,0,0,0.3)]">
            <div className="max-w-[180px] sm:max-w-[220px] relative">
              <h2 className="inline-block bg-[#A9FF66] rounded-md font-medium text-base leading-tight px-1 py-0.5">
                Analytics and
                <br />
                Tracking
              </h2>
              <button
                aria-label="Learn more about Analytics and Tracking"
                className="mt-6 flex items-center gap-2 text-white text-sm font-normal relative"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black relative">
                  <i className="fas fa-arrow-up-right z-10 relative"></i>
                  <svg
                    className="arrow-svg btn-arrow-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 12h8M12 4l8 8-8 8"></path>
                  </svg>
                </span>
                Learn more
              </button>
            </div>
            <img
              alt="Illustration of multiple web browser windows with charts and graphs representing analytics and tracking"
              className="mt-6 sm:mt-0 sm:ml-6 max-w-[160px] sm:max-w-[200px] object-contain"
              height="100"
              src="https://i.postimg.cc/50kcX6sp/Illustration-3.png"
              width="160"
            />
          </article>
        </section>
      </div>
    </section>
  );
}

export default Services;
