import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2825] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#A89F94]">Crafted to be treasured.</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#A89F94]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#C5A46E] transition-colors">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E] transition-colors">Earrings</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E] transition-colors">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E] transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#A89F94]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Shipping</a>
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Returns</a>
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#A89F94]">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Our Story</a>
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Journal</a>
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-[#C5A46E] transition-colors">Stockists</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4A4641] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A89F94]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A46E] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#C5A46E] transition-colors">Pinterest</a>
            <a href="#" className="hover:text-[#C5A46E] transition-colors">TikTok</a>
          </div>
          <div className="flex gap-4 text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;