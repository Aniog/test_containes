import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2823] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.15em] mb-2">VELMORA</div>
            <p className="text-sm text-[#A39B8F]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-[#A39B8F]">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#C5A46E]">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E]">Earrings</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E]">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[#C5A46E]">Huggies</Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-[#A39B8F]">COLLECTIONS</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E]">Bestsellers</a>
              <a href="#" className="block hover:text-[#C5A46E]">New Arrivals</a>
              <a href="#" className="block hover:text-[#C5A46E]">Gifting</a>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-[#A39B8F]">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E]">Shipping</a>
              <a href="#" className="block hover:text-[#C5A46E]">Returns</a>
              <a href="#" className="block hover:text-[#C5A46E]">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A46E]">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-[#A39B8F]">COMPANY</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E]">Our Story</a>
              <a href="#" className="block hover:text-[#C5A46E]">Journal</a>
              <a href="#" className="block hover:text-[#C5A46E]">Sustainability</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3D3832] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A39B8F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A46E]">Instagram</a>
            <a href="#" className="hover:text-[#C5A46E]">Pinterest</a>
            <a href="#" className="hover:text-[#C5A46E]">TikTok</a>
          </div>
          <div>18K Gold Plated · Hypoallergenic</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;