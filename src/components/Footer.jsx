import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1816] text-[#F8F6F3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[0.2em] mb-2">VELMORA</div>
            <p className="text-sm text-[#9A9289]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Shop</div>
            <ul className="space-y-2 text-sm text-[#D4B896]">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Help</div>
            <ul className="space-y-2 text-sm text-[#D4B896]">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Company</div>
            <ul className="space-y-2 text-sm text-[#D4B896]">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Follow Us</div>
            <div className="flex gap-4 text-sm text-[#D4B896]">
              <a href="#" className="hover:text-white transition-colors">IG</a>
              <a href="#" className="hover:text-white transition-colors">PT</a>
              <a href="#" className="hover:text-white transition-colors">TT</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A3632] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6560]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B8976F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#B8976F] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#B8976F] transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-3 text-[#B8976F]">
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