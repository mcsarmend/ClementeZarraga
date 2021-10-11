import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Clemente Armando Zarraga</h1>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Clemente Zarraga</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/clemente-armando-zarraga-cruz-50b83613a/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
