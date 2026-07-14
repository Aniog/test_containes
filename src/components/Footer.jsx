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
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="text-xs text-[#8a8178] mt-3 max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-[#8a8178]">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-[#8a8178]">Help</h4>
            <ul className="space-y-2">
              <li><a href="#shipping" className="footer-link">Shipping</a></li>
              <li><a href="#returns" className="footer-link">Returns</a></li>
              <li><a href="#care" className="footer-link">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-[#8a8178]">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3a3632] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8a8178]">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
            <div className="flex items-center gap-3">
              <span>Payment:</span>
              <span className="tracking-widest">VISA · MC · AMEX</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#instagram" className="footer-link" aria-label="Instagram">IG</a>
            <a href="#pinterest" className="footer-link" aria-label="Pinterest">PT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
