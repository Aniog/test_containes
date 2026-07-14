import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-[#E5DDD3]">
          {/* Logo */}
          <div>
            <div className="logo text-[#2A2522] mb-4">VELMORA</div>
            <p className="text-xs text-[#6B625B] max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#2A2522]">Shop</div>
            <div className="space-y-1 text-sm">
              <Link to="/shop" className="footer-link">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#2A2522]">Help</div>
            <div className="space-y-1 text-sm">
              <a href="#shipping" className="footer-link">Shipping</a>
              <a href="#returns" className="footer-link">Returns</a>
              <a href="#care" className="footer-link">Jewelry Care</a>
              <a href="#contact" className="footer-link">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#2A2522]">Company</div>
            <div className="space-y-1 text-sm">
              <Link to="/about" className="footer-link">Our Story</Link>
              <Link to="/journal" className="footer-link">Journal</Link>
              <a href="#sustainability" className="footer-link">Sustainability</a>
              <a href="#press" className="footer-link">Press</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#6B625B]">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span>Payment:</span>
              <span className="tracking-widest">VISA</span>
              <span className="tracking-widest">MC</span>
              <span className="tracking-widest">AMEX</span>
              <span className="tracking-widest">PP</span>
            </div>
            <div className="hidden md:block">·</div>
            <div className="flex items-center gap-4">
              <a href="#instagram" className="hover:text-[#2A2522]">IG</a>
              <a href="#pinterest" className="hover:text-[#2A2522]">PT</a>
              <a href="#tiktok" className="hover:text-[#2A2522]">TT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
