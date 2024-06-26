import React from 'react';
import './ContactUs.css';
import contactIllustration from '../assets/contactus-illustration.png'; // Import the image

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Get in Touch.</h2>
        <p>We are here to make impact on Millons of family by acknowledge them Cyber-Awareness </p>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="phone">Phone number: </label>
            <input type="tel" id="phone" placeholder="Enter your phone number" />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea id="description" placeholder="Enter your description"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-illustration">
        <img src={contactIllustration} alt="Contact Us Illustration" />
        <p>For More Information Place Contact Us on</p>
        <p>02fe22bcs415@kletech.ac.in</p>
        <p>+91 76187 27391</p>
        <div className="social-icons">
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
