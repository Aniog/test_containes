import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2825] text-[#E5DFD3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</div>
            <p className="text-sm text-[#6B665F]">Fine jewelry, thoughtfully made.</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white transition-colors">Shipping</a>
              <a href="#" className="block hover:text-white transition-colors">Returns</a>
              <a href="#" className="block hover:text-white transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white">COMPANY</div>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-white transition-colors">Our Story</a>
              <a href="#journal" className="block hover:text-white transition-colors">Journal</a>
              <a href="#" className="block hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4A4640] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em] text-[#6B665F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
          <div>18K GOLD · HYPOALLERGENIC · LIFETIME WARRANTY</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;