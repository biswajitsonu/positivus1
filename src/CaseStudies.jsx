import React from 'react';
import './CaseStudies.css';

function CaseStudies() {
  return (
    <div className="casestudies-container" aria-label="Case Studies section">
      <div className="casestudies-header">
        <h2 className="casestudies-title">
          Case Studies
        </h2>
        <p className="casestudies-description">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="casestudies-content">
        <div className="casestudy-item">
          <p className="casestudy-text">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a
            href="#"
            className="casestudy-link"
          >
            <span>Learn more</span>
            <svg
              className="casestudy-icon"
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

        <div className="casestudy-item casestudy-middle">
          <p className="casestudy-text">
            For a B2B software company, we developed an SEO strategy that resulted
            in a first page ranking for key keywords and a 200% increase in
            organic traffic.
          </p>
          <a
            href="#"
            className="casestudy-link"
          >
            <span>Learn more</span>
            <svg
              className="casestudy-icon"
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

        <div className="casestudy-item">
          <p className="casestudy-text">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a
            href="#"
            className="casestudy-link"
          >
            <span>Learn more</span>
            <svg
              className="casestudy-icon"
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
