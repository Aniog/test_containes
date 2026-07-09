import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mb-12">
          {/* Logo */}
          <div>
            <Link to="/" className="nav-logo text-white block mb-4">
              VELMORA
            </Link>
            <p className="text-xs opacity-60 max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="footer-col-title">Shop</div>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="footer-link">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="footer-link">Earrings</Link>
              <Link to="/shop?category=necklaces" className="footer-link">Necklaces</Link>
              <Link to="/shop?category=huggies" className="footer-link">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="footer-col-title">Help</div>
            <div className="flex flex-col gap-2">
              <a href="#shipping" className="footer-link">Shipping</a>
              <a href="#returns" className="footer-link">Returns</a>
              <a href="#care" className="footer-link">Jewelry Care</a>
              <a href="#contact" className="footer-link">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="footer-link">Our Story</Link>
              <Link to="/journal" className="footer-link">Journal</Link>
              <a href="#sustainability" className="footer-link">Sustainability</a>
              <a href="#careers" className="footer-link">Careers</a>
            </div>
          </div>
        </div>

        <div className="divider" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs opacity-60">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[2px] text-[10px]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-link">PT</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-link">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;