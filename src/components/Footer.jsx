import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <div className="logo text-xl tracking-[0.3em] mb-4">VELMORA</div>
            <p className="text-xs text-white/50 max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white/70">Shop</div>
            <div className="space-y-2">
              <Link to="/shop" className="block footer-link">All Jewelry</Link>
              <Link to="/shop" className="block footer-link">Earrings</Link>
              <Link to="/shop" className="block footer-link">Necklaces</Link>
              <Link to="/shop" className="block footer-link">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white/70">Help</div>
            <div className="space-y-2">
              <a href="#shipping" className="block footer-link">Shipping</a>
              <a href="#returns" className="block footer-link">Returns</a>
              <a href="#care" className="block footer-link">Jewelry Care</a>
              <a href="#contact" className="block footer-link">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white/70">Company</div>
            <div className="space-y-2">
              <Link to="/" className="block footer-link">Our Story</Link>
              <Link to="/" className="block footer-link">Journal</Link>
              <a href="#sustainability" className="block footer-link">Sustainability</a>
              <a href="#careers" className="block footer-link">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>
          
          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="footer-link">IG</a>
            <a href="#pinterest" className="footer-link">PT</a>
            <a href="#tiktok" className="footer-link">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
