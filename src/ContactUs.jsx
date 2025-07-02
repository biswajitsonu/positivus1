import React from 'react';

function ContactUs() {
  return (
    <section className="bg-white p-8 w-full">
      <header className="flex flex-wrap items-center gap-6 mb-10">
        <h1 className="bg-[#B9FF66] rounded-md px-3 py-1 text-2xl font-semibold leading-none">
          Contact Us
        </h1>
        <p className="text-base leading-5 max-w-xs">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      </header>
      <main>
        <section className="bg-[#F3F4F6] rounded-3xl p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 w-full">
          <form className="flex-1 max-w-xl space-y-6">
            <fieldset className="flex items-center gap-8">
              <label className="flex items-center gap-2 cursor-pointer relative">
                <input defaultChecked name="contactType" type="radio" className="appearance-none w-5 h-5 rounded-full border border-black cursor-pointer relative outline-offset-2 transition-colors" />
                <span className="text-sm leading-5 select-none">Say Hi</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer relative">
                <input name="contactType" type="radio" className="appearance-none w-5 h-5 rounded-full border border-black cursor-pointer relative outline-offset-2 transition-colors" />
                <span className="text-sm leading-5 select-none">Get a Quote</span>
              </label>
            </fieldset>
            <div>
              <label className="block text-sm leading-5 mb-1" htmlFor="name">Name</label>
              <input id="name" placeholder="Name" type="text" className="w-full rounded-md border border-black px-4 py-3 placeholder:text-gray-400 text-base leading-6 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm leading-5 mb-1" htmlFor="email">Email*</label>
              <input id="email" placeholder="Email" type="email" className="w-full rounded-md border border-black px-4 py-3 placeholder:text-gray-400 text-base leading-6 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm leading-5 mb-1" htmlFor="message">Message*</label>
              <textarea id="message" placeholder="Message" rows="6" className="w-full rounded-md border border-black px-4 py-3 placeholder:text-gray-400 text-base leading-6 resize-none focus:outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#161820] text-white rounded-xl py-4 text-base leading-6 font-normal">
              Send Message
            </button>
          </form>
          <div className="flex justify-center md:justify-end flex-1 relative">
            <img
              alt="Large black star shape with thin black lines radiating around it on a white background"
              className="max-w-[300px]"
              height="300"
              src="https://i.postimg.cc/MGLbswcT/Illustration-6.png"
              width="300"
            />
          </div>
        </section>
      </main>
    </section>
  );
}

export default ContactUs;
