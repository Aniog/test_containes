import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/shop">All Jewelry</Link>
          <Link to="/shop">Earrings</Link>
          <Link to="/shop">Necklaces</Link>
          <Link to="/shop">Huggies</Link>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <Link to="/about">Shipping</Link>
          <Link to="/about">Returns</Link>
          <Link to="/about">Care Guide</Link>
          <Link to="/about">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">Our Story</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/about">Sustainability</Link>
          <Link to="/about">Careers</Link>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-logo">VELMORA</div>
        <div style={{ color: 'var(--color-text-light)' }}>
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-light)' }}>
          <span>Visa</span>
          <span>MC</span>
          <span>Amex</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;