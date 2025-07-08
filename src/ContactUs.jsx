import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <section className="contactus-container">
      <header className="contactus-header">
        <h1 className="contactus-title">
          Contact Us
        </h1>
        <p className="contactus-subtitle">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      </header>
      <main>
        <section className="contactus-content">
          <form className="contactus-form">
            <fieldset className="contactus-contact-type">
              <label className="contactus-label">
                <input defaultChecked name="contactType" type="radio" className="contactus-radio" />
                <span>Say Hi</span>
              </label>
              <label className="contactus-label">
                <input name="contactType" type="radio" className="contactus-radio" />
                <span>Get a Quote</span>
              </label>
            </fieldset>
            <div className="contactus-field">
              <label htmlFor="name" className="contactus-field-label">Name</label>
              <input id="name" placeholder="Name" type="text" className="contactus-input" />
            </div>
            <div className="contactus-field">
              <label htmlFor="email" className="contactus-field-label">Email*</label>
              <input id="email" placeholder="Email" type="email" className="contactus-input" />
            </div>
            <div className="contactus-field">
              <label htmlFor="message" className="contactus-field-label">Message*</label>
              <textarea id="message" placeholder="Message" rows="6" className="contactus-textarea"></textarea>
            </div>
            <button type="submit" className="contactus-submit-button">
              Send Message
            </button>
          </form>
          <div className="contactus-image-container">
            <img
              alt="Large black star shape with thin black lines radiating around it on a white background"
              className="contactus-image"
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
