import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="heading-serif text-2xl tracking-[0.15em] text-text">
              VELMORA
            </Link>
            <p className="text-xs text-text-muted mt-3 tracking-widest">
              FINE JEWELRY
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.1em] font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.1em] font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="footer-link">Shipping</a></li>
              <li><a href="#returns" className="footer-link">Returns</a></li>
              <li><a href="#care" className="footer-link">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.1em] font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="#press" className="footer-link">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-x-6">
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
            <a href="#accessibility" className="footer-link">Accessibility</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-x-3 text-[10px] tracking-[2px]">
            VISA · MC · AMEX · PAYPAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
