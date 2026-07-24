import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-[#F8F5F0] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-white/10">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-white/60 max-w-[180px]">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase text-xs tracking-[0.1em] mb-4 text-white/50">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#C5A26F] transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#C5A26F] transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A26F] transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#C5A26F] transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase text-xs tracking-[0.1em] mb-4 text-white/50">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Shipping</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Returns</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase text-xs tracking-[0.1em] mb-4 text-white/50">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#C5A26F] transition-colors">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#C5A26F] transition-colors">Journal</Link>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="uppercase text-xs tracking-[0.1em] mb-4 text-white/50">Follow</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Instagram</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">Pinterest</a>
              <a href="#" className="block hover:text-[#C5A26F] transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 tracking-[0.08em]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>Visa · Mastercard · Amex · Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
