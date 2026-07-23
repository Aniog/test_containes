import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div>
          <div className="footer-logo">VELMORA</div>
          <p className="text-sm opacity-70 max-w-xs">
            Fine demi-gold jewelry, crafted with intention. 
            For the woman who values quiet luxury.
          </p>
        </div>

        {/* Shop */}
        <div>
          <div className="footer-col-title">Shop</div>
          <Link to="/shop" className="footer-link">All Jewelry</Link>
          <Link to="/shop?category=Earrings" className="footer-link">Earrings</Link>
          <Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link>
          <Link to="/shop?category=Huggies" className="footer-link">Huggies</Link>
        </div>

        {/* Help */}
        <div>
          <div className="footer-col-title">Help</div>
          <Link to="/about" className="footer-link">Shipping</Link>
          <Link to="/about" className="footer-link">Returns</Link>
          <Link to="/about" className="footer-link">Care Guide</Link>
          <Link to="/about" className="footer-link">Contact</Link>
        </div>

        {/* Company */}
        <div>
          <div className="footer-col-title">Company</div>
          <Link to="/about" className="footer-link">Our Story</Link>
          <Link to="/journal" className="footer-link">Journal</Link>
          <a href="#" className="footer-link">Sustainability</a>
          <a href="#" className="footer-link">Press</a>
        </div>
      </div>

      <div className="footer-bottom container">
        <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
        
        <div className="social-links">
          <a href="#" className="social-link" aria-label="Instagram">IG</a>
          <a href="#" className="social-link" aria-label="Pinterest">PT</a>
          <a href="#" className="social-link" aria-label="TikTok">TT</a>
        </div>

        <div className="flex gap-4">
          <span>18K Gold Plated</span>
          <span>•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
