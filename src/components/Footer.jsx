import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="font-serif text-xl tracking-[0.15em] text-white mb-4">VELMORA</div>
            <p className="text-sm text-[#9A9085] max-w-[180px]">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[#9A9085] mb-4">Shop</div>
            <ul className="space-y-2">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[#9A9085] mb-4">Help</div>
            <ul className="space-y-2">
              <li><a href="#shipping" className="footer-link">Shipping</a></li>
              <li><a href="#returns" className="footer-link">Returns</a></li>
              <li><a href="#care" className="footer-link">Care Guide</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase text-[#9A9085] mb-4">Company</div>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="divider bg-[#3A3631] mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9A9085]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 text-[10px] tracking-widest">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={16} className="hover:text-[#B89778] transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={16} className="hover:text-[#B89778] transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={16} className="hover:text-[#B89778] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
