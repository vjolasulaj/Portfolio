import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <span className="section-subtitle">Contact me</span>

      <div className="contact-container container grid">
        <div className="contact-info">
          <div className="contact-card">
            <h3 className="contact-card-title">Email</h3>
            <span className="contact-card-data">sulaj.vjolaa@gmail.com</span>
          </div>
          <div className="contact-card">
            <h3 className="contact-card-title">Phone Number</h3>
            <span className="contact-card-data">+355 69 35 20 788</span>
          </div>
          <div className="contact-card">
            <h3 className="contact-card-title">Linkedin</h3>
            <span className="contact-card-data">Vjola Sulaj</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
