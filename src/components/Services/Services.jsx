import React from "react";
import "./Services.css";

const Services = () => {
  return(
    <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What I Offer</span>

        <div className="services-container container grid">
            <div className="services-content">
                <div>
                    <i className="uil uil services-icon"></i>
                    <h3 className="services-title"></h3>
                </div>

                <span className="services-button">View More</span>
            </div>
        </div>
    </section>
  )
};

export default Services;
