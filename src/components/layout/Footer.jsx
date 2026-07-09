import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2823] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#A89F8F]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#A89F8F]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#C5A46E]">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E]">Earrings</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E]">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E]">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#A89F8F]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E]">Shipping</a>
              <a href="#" className="block hover:text-[#C5A46E]">Returns</a>
              <a href="#" className="block hover:text-[#C5A46E]">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A46E]">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#A89F8F]">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E]">Our Story</a>
              <a href="#" className="block hover:text-[#C5A46E]">Journal</a>
              <a href="#" className="block hover:text-[#C5A46E]">Sustainability</a>
              <a href="#" className="block hover:text-[#C5A46E]">Press</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3D3832] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A89F8F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A46E]">Instagram</a>
            <a href="#" className="hover:text-[#C5A46E]">Pinterest</a>
            <a href="#" className="hover:text-[#C5A46E]">TikTok</a>
          </div>
          <div>Visa · Mastercard · Amex · Apple Pay</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;