import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-[#4A443D]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] text-[#F8F5F1]">VELMORA</div>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#C5A46E]">Shop</div>
            <div className="space-y-2 text-sm text-[#A89F91]">
              <Link to="/shop" className="block hover:text-white transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#C5A46E]">Help</div>
            <div className="space-y-2 text-sm text-[#A89F91]">
              <a href="#" className="block hover:text-white transition-colors">Shipping</a>
              <a href="#" className="block hover:text-white transition-colors">Returns</a>
              <a href="#" className="block hover:text-white transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#C5A46E]">Company</div>
            <div className="space-y-2 text-sm text-[#A89F91]">
              <Link to="/about" className="block hover:text-white transition-colors">Our Story</Link>
              <Link to="/journal" className="block hover:text-white transition-colors">Journal</Link>
              <a href="#" className="block hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-white transition-colors">Press</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#C5A46E]">Follow</div>
            <div className="space-y-2 text-sm text-[#A89F91]">
              <a href="#" className="block hover:text-white transition-colors">Instagram</a>
              <a href="#" className="block hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="block hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B665F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-3 text-[#C5A46E]">
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
