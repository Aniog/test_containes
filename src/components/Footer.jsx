import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4" style={{ gap: '2.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
              SSourcing China
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              Professional China sourcing services for global buyers. Reliable suppliers, verified factories, quality assurance.
            </p>
          </div>

          <div>
            <div className="footer-title">Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <Link to="/services">Supplier Sourcing</Link>
              <Link to="/services">Factory Verification</Link>
              <Link to="/services">Quality Inspection</Link>
              <Link to="/services">Production Monitoring</Link>
              <Link to="/services">Shipping Coordination</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Contact</div>
            <div style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>
              <p>Shanghai, China</p>
              <p style={{ marginTop: '0.5rem' }}>
                <a href="mailto:info@ssourcingchina.com">info@ssourcingchina.com</a>
              </p>
              <p>
                <a href="tel:+862150000000">+86 21 5000 0000</a>
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #334155', paddingTop: '1.5rem', fontSize: '0.8125rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© {currentYear} SSourcing China. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;