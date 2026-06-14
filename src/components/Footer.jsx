import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div>
          <div className="footer-brand">
            ARTITECT <span>MACHINERY</span>
          </div>
          <p>
            Precision-engineered sheet metal folding solutions since 1987. 
            Trusted by fabricators worldwide for reliability and performance.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#features">Engineering</a>
          <a href="#gallery">Our Work</a>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <a href="#contact">Contact Sales</a>
          <a href="#contact">Request Service</a>
          <a href="#products">Product Catalog</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} ARTITECT MACHINERY. All rights reserved. 
          Crafted with precision in Germany.
        </p>
      </div>
    </footer>
  );
};

export default Footer;