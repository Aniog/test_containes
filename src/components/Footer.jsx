import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-12">
          {/* Logo */}
          <div>
            <div className="font-serif text-xl tracking-[0.25em] text-velmora-bg mb-4">VELMORA</div>
            <p className="text-xs text-velmora-text-muted max-w-[180px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="caption mb-4 text-velmora-bg">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="caption mb-4 text-velmora-bg">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="footer-link">Shipping</a></li>
              <li><a href="#returns" className="footer-link">Returns</a></li>
              <li><a href="#care" className="footer-link">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="caption mb-4 text-velmora-bg">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="#press" className="footer-link">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-velmora-text-muted">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">•</span>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>

          <div className="flex items-center gap-6">
            <span className="uppercase tracking-widest">We accept</span>
            <div className="flex gap-3 text-[10px] tracking-[2px]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>

          <div className="flex gap-4">
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