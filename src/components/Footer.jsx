import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">SSourcing China</div>
            <p className="footer-desc">
              Professional sourcing agent based in China, helping global buyers 
              connect with reliable suppliers since 2014.
            </p>
          </div>
          
          <div>
            <div className="footer-title">Company</div>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/case-studies" className="footer-link">Case Studies</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          
          <div>
            <div className="footer-title">Services</div>
            <Link to="/services" className="footer-link">Supplier Sourcing</Link>
            <Link to="/services" className="footer-link">Factory Verification</Link>
            <Link to="/services" className="footer-link">Quality Control</Link>
            <Link to="/services" className="footer-link">Production Monitoring</Link>
            <Link to="/services" className="footer-link">Shipping Coordination</Link>
          </div>
          
          <div>
            <div className="footer-title">Contact</div>
            <a href="mailto:info@ssourcingchina.com" className="footer-link">
              info@ssourcingchina.com
            </a>
            <a href="tel:+862155551234" className="footer-link">
              +86 21 5555 1234
            </a>
            <p className="footer-link" style={{ marginTop: '0.5rem' }}>
              Shanghai, China
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          © {currentYear} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;