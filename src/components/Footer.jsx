import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2825] text-[#F8F6F3] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#A39B91]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase tracking-[0.15em] text-sm mb-4">Shop</div>
            <div className="space-y-2 text-sm text-[#A39B91]">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase tracking-[0.15em] text-sm mb-4">Help</div>
            <div className="space-y-2 text-sm text-[#A39B91]">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase tracking-[0.15em] text-sm mb-4">Company</div>
            <div className="space-y-2 text-sm text-[#A39B91]">
              <a href="#" className="block hover:text-white">Our Story</a>
              <a href="#" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Sustainability</a>
              <a href="#" className="block hover:text-white">Stockists</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4A4641] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A39B91]">
          <div>© 2026 Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
          <div className="flex gap-4 text-xs tracking-widest">
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