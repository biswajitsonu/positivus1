import React, { useState } from 'react';
import './WorkingProcess.css';

const steps = [
  {
    id: '01',
    title: 'Consultation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: '02',
    title: 'Research and Strategy Development',
    content:
      'We conduct thorough research and develop a tailored strategy to meet your business objectives and maximize your market impact.',
  },
  {
    id: '03',
    title: 'Implementation',
    content:
      'Our team implements the agreed-upon strategies efficiently, ensuring all aspects are executed to achieve desired results.',
  },
  {
    id: '04',
    title: 'Monitoring and Optimization',
    content:
      'We continuously monitor performance and optimize strategies to improve outcomes and adapt to changing market conditions.',
  },
  {
    id: '05',
    title: 'Reporting and Communication',
    content:
      'Regular reporting and clear communication keep you informed about progress and insights throughout the process.',
  },
  {
    id: '06',
    title: 'Continual Improvement',
    content:
      'We focus on continual improvement by analyzing results and refining strategies for sustained success.',
  },
];

function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="workingprocess-container">
      <header className="workingprocess-header">
        <h1 className="workingprocess-title">Our Working Process</h1>
        <p className="workingprocess-subtitle">
          Step-by-Step Guide to Achieving
          <br />
          Your Business Goals
        </p>
      </header>

      <section className="workingprocess-accordion" id="accordion">
        {steps.map((step, index) => (
          <article
            key={step.id}
            className={`workingprocess-step ${
              openIndex === index ? 'workingprocess-step-open' : 'workingprocess-step-closed'
            }`}
          >
            <div className="workingprocess-step-header">
              <span className="workingprocess-step-id">{step.id}</span>
              <h2 className="workingprocess-step-title">{step.title}</h2>
            </div>
            <button
              aria-label={`Toggle ${step.title}`}
              className="workingprocess-toggle-button"
              type="button"
              onClick={() => toggle(index)}
            >
              <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
            </button>
            {openIndex === index && (
              <>
                <hr className="workingprocess-divider" />
                <p className="workingprocess-step-content">{step.content}</p>
              </>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

export default WorkingProcess;
