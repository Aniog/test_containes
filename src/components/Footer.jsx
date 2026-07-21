import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-bg-dark text-velmora-text-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-velmora-border-dark">
          {/* Logo */}
          <div>
            <div className="logo text-xl mb-4">VELMORA</div>
            <p className="text-sm text-velmora-text-muted max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-4">Shop</div>
            <div className="space-y-2">
              <Link to="/shop" className="footer-link block">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link block">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link block">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link block">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-4">Help</div>
            <div className="space-y-2">
              <a href="#shipping" className="footer-link block">Shipping</a>
              <a href="#returns" className="footer-link block">Returns</a>
              <a href="#care" className="footer-link block">Jewelry Care</a>
              <a href="#contact" className="footer-link block">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-4">Company</div>
            <div className="space-y-2">
              <Link to="/about" className="footer-link block">Our Story</Link>
              <Link to="/journal" className="footer-link block">Journal</Link>
              <a href="#sustainability" className="footer-link block">Sustainability</a>
              <a href="#careers" className="footer-link block">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-velmora-text-muted">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
            <a href="#accessibility" className="footer-link">Accessibility</a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3 text-[10px] tracking-widest">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">IG</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-link">PT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
