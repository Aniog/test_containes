import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1A17] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.3em] mb-4">VELMORA</div>
            <p className="text-sm text-[#B8976F] tracking-widest">EST 2018</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B8976F] transition-colors">Earrings</Link>
              <Link to="/shop" className="block hover:text-[#B8976F] transition-colors">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[#B8976F] transition-colors">Huggies</Link>
              <Link to="/shop" className="block hover:text-[#B8976F] transition-colors">Collections</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Shipping</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Returns</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Our Story</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Journal</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Stockists</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Follow</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Instagram</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">Pinterest</a>
              <a href="#" className="block hover:text-[#B8976F] transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A3630] flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em] text-[#6B665F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B8976F]">Privacy</a>
            <a href="#" className="hover:text-[#B8976F]">Terms</a>
            <a href="#" className="hover:text-[#B8976F]">Accessibility</a>
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