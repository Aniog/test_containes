import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1C1917] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#A39B8F]">Fine jewelry, thoughtfully made.</p>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B8976F]">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[#B8976F]">Earrings</Link>
              <Link to="/shop" className="block hover:text-[#B8976F]">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[#B8976F]">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976F]">Shipping</a>
              <a href="#" className="block hover:text-[#B8976F]">Returns</a>
              <a href="#" className="block hover:text-[#B8976F]">Care Guide</a>
              <a href="#" className="block hover:text-[#B8976F]">Size Guide</a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976F]">Our Story</a>
              <a href="#" className="block hover:text-[#B8976F]">Journal</a>
              <a href="#" className="block hover:text-[#B8976F]">Stockists</a>
              <a href="#" className="block hover:text-[#B8976F]">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976F]">Follow</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976F]">Instagram</a>
              <a href="#" className="block hover:text-[#B8976F]">Pinterest</a>
              <a href="#" className="block hover:text-[#B8976F]">TikTok</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#3A3631] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A39B8F]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
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
