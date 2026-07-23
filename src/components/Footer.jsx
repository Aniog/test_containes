import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12">
          {/* Logo */}
          <div>
            <Link to="/" className="nav-logo text-[#2C2522] block mb-4">
              VELMORA
            </Link>
            <p className="text-xs text-[#6B6058] max-w-[180px]">
              Timeless demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="font-medium text-sm tracking-[0.1em] uppercase mb-4">Shop</div>
            <div className="space-y-1">
              <Link to="/shop" className="footer-link">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="font-medium text-sm tracking-[0.1em] uppercase mb-4">Help</div>
            <div className="space-y-1">
              <a href="#shipping" className="footer-link">Shipping</a>
              <a href="#returns" className="footer-link">Returns</a>
              <a href="#care" className="footer-link">Jewelry Care</a>
              <a href="#contact" className="footer-link">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-medium text-sm tracking-[0.1em] uppercase mb-4">Company</div>
            <div className="space-y-1">
              <Link to="/about" className="footer-link">Our Story</Link>
              <Link to="/journal" className="footer-link">Journal</Link>
              <a href="#sustainability" className="footer-link">Sustainability</a>
              <a href="#careers" className="footer-link">Careers</a>
            </div>
          </div>
        </div>

        <div className="divider my-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#6B6058]">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>© {currentYear} Velmora. All rights reserved.</span>
            <a href="#privacy" className="hover:text-[#2C2522]">Privacy</a>
            <a href="#terms" className="hover:text-[#2C2522]">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-4 tracking-[0.15em] uppercase">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2522]">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2522]">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2522]">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
