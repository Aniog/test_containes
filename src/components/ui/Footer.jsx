import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--velmora-text)] text-[var(--velmora-surface)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-[200px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/shop" className="footer-link hover:text-white">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link hover:text-white">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link hover:text-white">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#shipping" className="footer-link hover:text-white">Shipping</a></li>
              <li><a href="#returns" className="footer-link hover:text-white">Returns</a></li>
              <li><a href="#care" className="footer-link hover:text-white">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="footer-link hover:text-white">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link hover:text-white">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link hover:text-white">Sustainability</a></li>
              <li><a href="#careers" className="footer-link hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white/70">Privacy</a>
            <a href="#terms" className="hover:text-white/70">Terms</a>
            <a href="#accessibility" className="hover:text-white/70">Accessibility</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.1em]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
