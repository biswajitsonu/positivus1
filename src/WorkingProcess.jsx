import React, { useState } from 'react';

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
<div className="mt-12 p-8 bg-white">
      <header className="flex flex-wrap items-center gap-4 mb-8">
        <h1 className="text-3xl font-extrabold bg-[#b9ff6a] rounded-md px-2 py-1 leading-none">
          Our Working Process
        </h1>
        <p className="text-sm max-w-xs">
          Step-by-Step Guide to Achieving
          <br />
          Your Business Goals
        </p>
      </header>

      <section className="space-y-4" id="accordion">
        {steps.map((step, index) => (
          <article
            key={step.id}
            className={`relative rounded-2xl border border-black border-opacity-30 shadow-[0_4px_0_0_rgba(0,0,0,0.8)] p-6 ${
              openIndex === index ? 'bg-[#b9ff6a]' : 'bg-[#f5f5f5]'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-5xl font-extrabold leading-none">{step.id}</span>
              <h2 className="text-xl font-semibold">{step.title}</h2>
            </div>
            <button
              aria-label={`Toggle ${step.title}`}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-black border-opacity-30 flex items-center justify-center text-black text-xl"
              type="button"
              onClick={() => toggle(index)}
            >
              <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
            </button>
            {openIndex === index && (
              <>
                <hr className="content-divider border-black border-opacity-30 my-4" />
                <p className="content text-base leading-tight max-w-4xl mt-0">{step.content}</p>
              </>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

export default WorkingProcess;
