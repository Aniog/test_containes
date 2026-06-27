import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1917] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-[#3A3631]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#A39B8F]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B8976F]">Shop</div>
            <ul className="space-y-2 text-sm text-[#A39B8F]">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B8976F]">Help</div>
            <ul className="space-y-2 text-sm text-[#A39B8F]">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B8976F]">Company</div>
            <ul className="space-y-2 text-sm text-[#A39B8F]">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stockists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B8976F]">Follow</div>
            <ul className="space-y-2 text-sm text-[#A39B8F]">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B665F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#A39B8F]">Privacy</a>
            <a href="#" className="hover:text-[#A39B8F]">Terms</a>
            <a href="#" className="hover:text-[#A39B8F]">Accessibility</a>
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
