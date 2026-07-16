import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#F8F5F0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#8B7E74]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-[#8B7E74]">
              <li><Link to="/shop" className="hover:text-white">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-white">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-white">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-[#8B7E74]">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Care Guide</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#8B7E74]">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Journal</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4">Follow Us</h4>
            <div className="flex gap-4 text-sm text-[#8B7E74]">
              <a href="#" className="hover:text-white">IG</a>
              <a href="#" className="hover:text-white">TT</a>
              <a href="#" className="hover:text-white">PT</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8B7E74]">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
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