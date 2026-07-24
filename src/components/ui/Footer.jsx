import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#F8F5F1]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#D4CFC6] leading-relaxed">
              Quiet luxury, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link text-[#D4CFC6]">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link text-[#D4CFC6]">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link text-[#D4CFC6]">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link text-[#D4CFC6]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="footer-link text-[#D4CFC6]">Shipping</a></li>
              <li><a href="#returns" className="footer-link text-[#D4CFC6]">Returns</a></li>
              <li><a href="#care" className="footer-link text-[#D4CFC6]">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link text-[#D4CFC6]">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link text-[#D4CFC6]">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link text-[#D4CFC6]">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link text-[#D4CFC6]">Sustainability</a></li>
              <li><a href="#careers" className="footer-link text-[#D4CFC6]">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#6B645C]">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#terms" className="footer-link">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-4 tracking-[0.1em] text-[10px]">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="footer-link hover:text-[#B89778]">IG</a>
            <a href="#pinterest" className="footer-link hover:text-[#B89778]">PT</a>
            <a href="#tiktok" className="footer-link hover:text-[#B89778]">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
