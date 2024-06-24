import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';  // Import your custom CSS

const Contact = () => {
  return (
    <div className="container container-contact mt-5">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item mb-3">
          <h3>Email Address:</h3>
          <p>virajjoshi02@gmail.com</p>
        </div>
        <div className="contact-item mb-3">
          <h3>Mobile Number:</h3>
          <p>+91 93281 87662</p>
        </div>
        <div className="contact-item mb-3">
          <h3>Physical Address:</h3>
          <p>123 Street, Rajkot, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
