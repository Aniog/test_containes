import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="heading-serif text-xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="text-sm text-muted mt-3 pr-4">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase mb-4">Shop</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/shop" className="footer-link">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase mb-4">Help</div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#shipping" className="footer-link">Shipping</a>
              <a href="#returns" className="footer-link">Returns</a>
              <a href="#care" className="footer-link">Jewelry Care</a>
              <a href="#contact" className="footer-link">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase mb-4">Company</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="footer-link">Our Story</Link>
              <Link to="/journal" className="footer-link">Journal</Link>
              <a href="#sustainability" className="footer-link">Sustainability</a>
              <a href="#careers" className="footer-link">Careers</a>
            </div>
          </div>
        </div>

        <div className="divider mb-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
            <div className="flex items-center gap-3 ml-2">
              <span>Payment:</span>
              <span className="text-[10px] tracking-widest">VISA • MC • AMEX • APPLE PAY</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#instagram" className="footer-link" aria-label="Instagram">IG</a>
            <a href="#pinterest" className="footer-link" aria-label="Pinterest">PT</a>
            <a href="#tiktok" className="footer-link" aria-label="TikTok">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
