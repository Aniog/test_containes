import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.3em] mb-2">VELMORA</div>
            <p className="text-sm text-[#8A7F75]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A26F]">SHOP</div>
            <ul className="space-y-2 text-sm text-[#D4B896]">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A26F]">HELP</div>
            <ul className="space-y-2 text-sm text-[#D4B896]">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A26F]">COMPANY</div>
            <ul className="space-y-2 text-sm text-[#D4B896]">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A26F]">FOLLOW</div>
            <ul className="space-y-2 text-sm text-[#D4B896]">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3D3632] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A7F75]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4B896]">Privacy</a>
            <a href="#" className="hover:text-[#D4B896]">Terms</a>
            <a href="#" className="hover:text-[#D4B896]">Accessibility</a>
          </div>
          <div className="flex gap-3 text-[#C5A26F]">
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