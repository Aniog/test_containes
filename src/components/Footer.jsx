import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1816] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#9A9287]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976E]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B8976E]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#B8976E]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#B8976E]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#B8976E]">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976E]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976E]">Shipping</a>
              <a href="#" className="block hover:text-[#B8976E]">Returns</a>
              <a href="#" className="block hover:text-[#B8976E]">Care Guide</a>
              <a href="#" className="block hover:text-[#B8976E]">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976E]">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#B8976E]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#B8976E]">Journal</Link>
              <a href="#" className="block hover:text-[#B8976E]">Sustainability</a>
              <a href="#" className="block hover:text-[#B8976E]">Careers</a>
            </div>
          </div>
        </div>

        <div className="divider bg-[#3A3630] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9A9287]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B8976E]">Instagram</a>
            <a href="#" className="hover:text-[#B8976E]">Pinterest</a>
            <a href="#" className="hover:text-[#B8976E]">TikTok</a>
          </div>
          <div>18K Gold Plated · Hypoallergenic</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
