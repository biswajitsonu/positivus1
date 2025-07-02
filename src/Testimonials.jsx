import React from 'react';

const testimonials = [
  {
    id: 1,
    text: '”We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
  },
  {
    id: 2,
    text: '”We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
  },
  {
    id: 3,
    text: '”We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
  },
];

function Testimonials() {
  return (
<div id="testimonials" className="px-6 pt-10 mt-12 bg-white text-black">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-10">
        <h2 className="text-3xl font-extrabold bg-[#9ef04a] rounded-md px-3 py-1 inline-block leading-none">
          Testimonials
        </h2>
        <p className="mt-3 sm:mt-0 max-w-xl text-base font-normal leading-6">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

<div className="bg-[#161820] rounded-3xl px-6 py-14 relative">
        <div className="flex space-x-6 overflow-x-auto no-scrollbar min-w-full snap-x snap-mandatory">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[600px] relative text-white snap-center"
            >
              <div className="border border-[#9ef04a] rounded-3xl p-8">
                <p className="text-sm leading-relaxed">{testimonial.text}</p>
              </div>
              <div className="mt-8 px-2">
                <p className="text-[#9ef04a] font-semibold text-sm">{testimonial.name}</p>
                <p className="text-white text-xs">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-10 mt-16 text-white text-xl select-none">
          <button aria-label="Previous testimonial" className="opacity-50 hover:opacity-100 transition">
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="flex space-x-2 text-[#9ef04a]">
            <i className="fas fa-star"></i>
            <i className="far fa-star text-white"></i>
            <i className="far fa-star text-white"></i>
            <i className="far fa-star text-white"></i>
            <i className="far fa-star text-white"></i>
          </div>
          <button aria-label="Next testimonial" className="opacity-100 hover:opacity-75 transition">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
