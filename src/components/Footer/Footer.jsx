import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">V</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://github.com/vjolasulaj"
            className="footer-social-link"
            target="_self"
          >
            <i class="uil uil-github"></i>
          </a>
          <a href="#" className="footer-social-link" target="_self">
            <i class="uil uil-linkedin"></i> 
          </a>
        </div>
        <div className="footer-copy">&copy; All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
