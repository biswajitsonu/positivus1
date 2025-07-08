import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-container">
      <div>
        <header className="services-header">
          <h1 className="services-title">
            Services
          </h1>
          <p className="services-description">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </header>
        <section className="services-cards">
          {/* Card 1 */}
          <article className="services-card">
            <div className="services-card-text">
              <h2 className="services-card-title">
                Search engine
                <br />
                optimization
              </h2>
              <button
                aria-label="Learn more about Search engine optimization"
                className="services-card-button"
              >
                <span className="services-card-button-icon-wrapper">
                  <i className="fas fa-arrow-up-right"></i>
                  <svg
                    className="services-card-button-icon"
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
              className="services-card-image"
              height="100"
              src="https://i.postimg.cc/BndXKnVS/Illustration-1.png"
              width="160"
            />
          </article>
          {/* Card 2 */}
          <article className="services-card services-card-highlight">
            <div className="services-card-text">
              <h2 className="services-card-title services-card-title-highlight">
                Pay-per-click
                <br />
                advertising
              </h2>
              <button
                aria-label="Learn more about Pay-per-click advertising"
                className="services-card-button"
              >
                <span className="services-card-button-icon-wrapper">
                  <i className="fas fa-arrow-up-right"></i>
                  <svg
                    className="services-card-button-icon"
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
              className="services-card-image"
              height="100"
              src="https://i.postimg.cc/26CjQbFD/tokyo-selecting-a-value-in-the-browser-window-1.png"
              width="160"
            />
          </article>
          {/* Card 3 */}
          <article className="services-card services-card-dark">
            <div className="services-card-text">
              <h2 className="services-card-title services-card-title-dark">
                Social Media
                <br />
                Marketing
              </h2>
              <button
                aria-label="Learn more about Social Media Marketing"
                className="services-card-button services-card-button-dark"
              >
                <span className="services-card-button-icon-wrapper services-card-button-icon-wrapper-dark">
                  <i className="fas fa-arrow-up-right"></i>
                  <svg
                    className="services-card-button-icon"
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
              className="services-card-image"
              height="100"
              src="https://i.postimg.cc/GpCbR8fy/Illustration-2.png"
              width="160"
            />
          </article>
          {/* Card 4 */}
          <article className="services-card">
            <div className="services-card-text">
              <h2 className="services-card-title">
                Email
                <br />
                Marketing
              </h2>
              <button
                aria-label="Learn more about Email Marketing"
                className="services-card-button"
              >
                <span className="services-card-button-icon-wrapper">
                  <i className="fas fa-arrow-up-right"></i>
                  <svg
                    className="services-card-button-icon"
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
              className="services-card-image"
              height="100"
              src="https://i.postimg.cc/XYMbKB4z/tokyo-sending-messages-from-one-place-to-another-1.png"
              width="160"
            />
          </article>
          {/* Card 5 */}
          <article className="services-card services-card-highlight">
            <div className="services-card-text">
              <h2 className="services-card-title services-card-title-highlight">
                Content
                <br />
                Creation
              </h2>
              <button
                aria-label="Learn more about Content Creation"
                className="services-card-button"
              >
                <span className="services-card-button-icon-wrapper">
                  <i className="fas fa-arrow-up-right"></i>
                  <svg
                    className="services-card-button-icon"
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
              className="services-card-image"
              height="100"
              src="https://i.postimg.cc/bvgfj6b7/tokyo-many-browser-windows-with-different-information-1.png"
              width="160"
            />
          </article>
          {/* Card 6 */}
          <article className="services-card services-card-dark">
            <div className="services-card-text">
              <h2 className="services-card-title services-card-title-dark">
                Analytics and
                <br />
                Tracking
              </h2>
              <button
                aria-label="Learn more about Analytics and Tracking"
                className="services-card-button services-card-button-dark"
              >
                <span className="services-card-button-icon-wrapper services-card-button-icon-wrapper-dark">
                  <i className="fas fa-arrow-up-right"></i>
                  <svg
                    className="services-card-button-icon"
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
              className="services-card-image"
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
