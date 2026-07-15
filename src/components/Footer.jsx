import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C2825] text-[#F8F6F3] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-white/60">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-white/60">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B89B6E]">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[#B89B6E]">Earrings</Link>
              <Link to="/shop" className="block hover:text-[#B89B6E]">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[#B89B6E]">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-white/60">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B89B6E]">Shipping</a>
              <a href="#" className="block hover:text-[#B89B6E]">Returns</a>
              <a href="#" className="block hover:text-[#B89B6E]">Care Guide</a>
              <a href="#" className="block hover:text-[#B89B6E]">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-white/60">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B89B6E]">Our Story</a>
              <a href="#" className="block hover:text-[#B89B6E]">Journal</a>
              <a href="#" className="block hover:text-[#B89B6E]">Sustainability</a>
              <a href="#" className="block hover:text-[#B89B6E]">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="uppercase text-xs tracking-[0.15em] mb-4 text-white/60">Follow Us</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B89B6E]">Instagram</a>
              <a href="#" className="block hover:text-[#B89B6E]">Pinterest</a>
              <a href="#" className="block hover:text-[#B89B6E]">TikTok</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 tracking-[0.08em]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="flex gap-3 text-lg">VISA · MC · AMEX</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;