import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1917] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#F8F5F1]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#8A8178] max-w-[180px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="footer-link">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="footer-link">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="footer-link">Shipping</a></li>
              <li><a href="#returns" className="footer-link">Returns</a></li>
              <li><a href="#care" className="footer-link">Jewelry Care</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B89778]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/journal" className="footer-link">Journal</Link></li>
              <li><a href="#sustainability" className="footer-link">Sustainability</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A8178]">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="hidden md:inline">·</span>
            <a href="#privacy" className="hover:text-[#F8F5F1]">Privacy</a>
            <a href="#terms" className="hover:text-[#F8F5F1]">Terms</a>
          </div>
          
          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em]">
            VISA · MC · AMEX · PAYPAL
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="hover:text-[#F8F5F1]">IG</a>
            <a href="#pinterest" className="hover:text-[#F8F5F1]">PT</a>
            <a href="#tiktok" className="hover:text-[#F8F5F1]">TT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;