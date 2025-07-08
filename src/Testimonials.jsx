import React, { useState, useRef } from 'react';
import './Testimonials.css';

// Sample testimonials with varied content
const testimonials = [
  {
    id: 1,
    text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
  },
  {
    id: 2,
    text: 'The digital marketing services provided by Positivus have transformed our online presence. Their expertise and dedication have helped us reach new customers and grow our brand effectively.',
    name: 'Emily Johnson',
    title: 'CEO at ABC Enterprises',
  },
  {
    id: 3,
    text: 'Positivus has been an invaluable partner in our marketing efforts. Their team is knowledgeable, proactive, and always ready to help us achieve our goals.',
    name: 'Michael Brown',
    title: 'Founder of Startup Hub',
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Scrolls the testimonial list to the testimonial at the given index
  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const child = container.children[index];
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        setActiveIndex(index);
      }
    }
  };

  // Handles clicking the previous button
  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1;
    scrollToIndex(newIndex);
  };

  // Handles clicking the next button
  const handleNext = () => {
    const newIndex = activeIndex < testimonials.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <div id="testimonials" className="testimonials-container">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="testimonials-subtitle">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="testimonials-slider">
        <div ref={containerRef} className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-controls" role="group" aria-label="Testimonial navigation">
          <button
            aria-label="Previous testimonial"
            className="testimonials-button"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <div className="testimonials-stars">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`testimonials-star ${index === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to testimonial ${index + 1}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    scrollToIndex(index);
                  }
                }}
              >
                &#9733;
              </span>
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            className="testimonials-button"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
