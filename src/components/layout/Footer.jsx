import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1612] text-[#F8F5F0] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 pb-12 border-b border-[#3A3632]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[4px] mb-4">VELMORA</div>
            <p className="text-sm text-[#A89F94] tracking-wide">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-[2px] mb-4 text-[#C5A26F]">SHOP</h4>
            <ul className="space-y-2 text-sm text-[#A89F94]">
              <li><Link to="/shop" className="hover:text-[#F8F5F0]">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-[#F8F5F0]">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-[#F8F5F0]">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-[#F8F5F0]">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-[2px] mb-4 text-[#C5A26F]">HELP</h4>
            <ul className="space-y-2 text-sm text-[#A89F94]">
              <li><a href="#" className="hover:text-[#F8F5F0]">Shipping</a></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">Returns</a></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">Care Guide</a></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-[2px] mb-4 text-[#C5A26F]">COMPANY</h4>
            <ul className="space-y-2 text-sm text-[#A89F94]">
              <li><Link to="/about" className="hover:text-[#F8F5F0]">Our Story</Link></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">Journal</a></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm tracking-[2px] mb-4 text-[#C5A26F]">FOLLOW</h4>
            <ul className="space-y-2 text-sm text-[#A89F94]">
              <li><a href="#" className="hover:text-[#F8F5F0]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">Pinterest</a></li>
              <li><a href="#" className="hover:text-[#F8F5F0]">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A89F94] tracking-wide">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F8F5F0]">Privacy</a>
            <a href="#" className="hover:text-[#F8F5F0]">Terms</a>
            <a href="#" className="hover:text-[#F8F5F0]">Accessibility</a>
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