import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2825] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-sm text-[#A89F8F] max-w-[200px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-sm tracking-[0.08em] mb-4 text-[#C5A46E]">SHOP</div>
            <div className="space-y-2 text-sm text-[#A89F8F]">
              <Link to="/shop" className="block hover:text-white transition-colors">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop" className="block hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop" className="block hover:text-white transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-sm tracking-[0.08em] mb-4 text-[#C5A46E]">HELP</div>
            <div className="space-y-2 text-sm text-[#A89F8F]">
              <a href="#" className="block hover:text-white transition-colors">Shipping</a>
              <a href="#" className="block hover:text-white transition-colors">Returns</a>
              <a href="#" className="block hover:text-white transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm tracking-[0.08em] mb-4 text-[#C5A46E]">COMPANY</div>
            <div className="space-y-2 text-sm text-[#A89F8F]">
              <a href="#" className="block hover:text-white transition-colors">Our Story</a>
              <a href="#" className="block hover:text-white transition-colors">Journal</a>
              <a href="#" className="block hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-white transition-colors">Stockists</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4A4640] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A89F8F]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
          <div className="flex gap-4 text-xs">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;