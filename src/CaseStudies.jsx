import React from 'react';
import './CaseStudies.css';

const caseStudies = [
  {
    id: 'left',
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    id: 'middle',
    text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    id: 'right',
    text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
];

function CaseStudies() {
  return (
    <section className="casestudies-container" aria-label="Case Studies section">
      <header className="casestudies-header">
        <h2 className="casestudies-title">Case Studies</h2>
        <p className="casestudies-description">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </header>

      <div className="casestudies-content">
        {caseStudies.map(({ id, text }) => (
          <article key={id} className={`casestudy-item casestudy-${id}`}>
            <p className="casestudy-text">{text}</p>
            <a href="#" className="casestudy-link" aria-label={`Learn more about case study ${id}`}>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
