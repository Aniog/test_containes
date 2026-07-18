import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">VELMORA</div>
        
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/shop">All Jewelry</Link>
            <Link to="/shop?category=earrings">Earrings</Link>
            <Link to="/shop?category=necklaces">Necklaces</Link>
            <Link to="/shop?category=huggies">Huggies</Link>
            <Link to="/shop?category=sets">Sets</Link>
          </div>
          
          <div className="footer-col">
            <h4>Help</h4>
            <Link to="/about">Shipping</Link>
            <Link to="/about">Returns</Link>
            <Link to="/about">Care Guide</Link>
            <Link to="/about">Size Guide</Link>
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
            <h4>Connect</h4>
            <div className="social-links" style={{ marginTop: '0.5rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#9a9087' }}>
              hello@velmora.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="payment-icons">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#9a9087' }}>
            <Link to="/about" style={{ color: 'inherit' }}>Privacy</Link> · <Link to="/about" style={{ color: 'inherit' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
