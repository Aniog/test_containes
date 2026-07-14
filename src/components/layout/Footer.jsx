import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1A17] text-[#F8F6F3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#A39B8F]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B8976F] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B8976F] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B8976F] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B8976F] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B8976F] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B8976F] transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Follow Us</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-[#B8976F] transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A3630] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A39B8F]">
          <div>© 2026 Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B8976F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#B8976F] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#B8976F] transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-3">
            <span>Visa</span>
            <span>MC</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;