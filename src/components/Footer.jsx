import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1816] text-[#f8f6f3] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#a39d95] max-w-[200px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-sm tracking-[0.1em] mb-4">SHOP</div>
            <div className="space-y-2 text-sm text-[#a39d95]">
              <Link to="/shop" className="block hover:text-white transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-sm tracking-[0.1em] mb-4">HELP</div>
            <div className="space-y-2 text-sm text-[#a39d95]">
              <a href="#" className="block hover:text-white transition-colors">Shipping</a>
              <a href="#" className="block hover:text-white transition-colors">Returns</a>
              <a href="#" className="block hover:text-white transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm tracking-[0.1em] mb-4">COMPANY</div>
            <div className="space-y-2 text-sm text-[#a39d95]">
              <Link to="/about" className="block hover:text-white transition-colors">Our Story</Link>
              <Link to="/journal" className="block hover:text-white transition-colors">Journal</Link>
              <a href="#" className="block hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3a3632] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a39d95]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
          <div className="flex gap-4 text-xs">
            <span>AMEX</span>
            <span>VISA</span>
            <span>MC</span>
            <span>APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
