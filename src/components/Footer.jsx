import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#F8F6F3] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12">
        <div>
          <div className="font-serif text-2xl tracking-[0.2em] mb-6">VELMORA</div>
          <p className="text-sm text-[#8B7E6F] max-w-[200px]">Fine jewelry crafted to be treasured.</p>
        </div>
        
        <div>
          <div className="filter-label mb-4">Shop</div>
          <div className="space-y-2 text-sm">
            <Link to="/shop" className="block hover:text-[#C5A26F]">All Jewelry</Link>
            <Link to="/shop?category=Earrings" className="block hover:text-[#C5A26F]">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A26F]">Necklaces</Link>
            <Link to="/shop?category=Huggies" className="block hover:text-[#C5A26F]">Huggies</Link>
          </div>
        </div>

        <div>
          <div className="filter-label mb-4">Help</div>
          <div className="space-y-2 text-sm">
            <a href="#" className="block hover:text-[#C5A26F]">Shipping</a>
            <a href="#" className="block hover:text-[#C5A26F]">Returns</a>
            <a href="#" className="block hover:text-[#C5A26F]">Care Guide</a>
            <a href="#" className="block hover:text-[#C5A26F]">Contact</a>
          </div>
        </div>

        <div>
          <div className="filter-label mb-4">Company</div>
          <div className="space-y-2 text-sm">
            <Link to="/about" className="block hover:text-[#C5A26F]">Our Story</Link>
            <Link to="/journal" className="block hover:text-[#C5A26F]">Journal</Link>
            <a href="#" className="block hover:text-[#C5A26F]">Sustainability</a>
            <a href="#" className="block hover:text-[#C5A26F]">Instagram</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8B7E6F]">
        <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
        <div className="flex gap-6">
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
          <span>Ethically Sourced</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;