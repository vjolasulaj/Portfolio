import React from "react";
import "./Portfolio.css";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">My Works</span>
      <Projects />
    </section>
  )
};

export default Portfolio;
