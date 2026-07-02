import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-sm text-[#F8F5F1]/70 max-w-[180px]">
              Fine jewelry, thoughtfully made.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#F8F5F1]/60">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B89778] transition-colors">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="block hover:text-[#B89778] transition-colors">Earrings</Link>
              <Link to="/shop?category=necklaces" className="block hover:text-[#B89778] transition-colors">Necklaces</Link>
              <Link to="/shop?category=huggies" className="block hover:text-[#B89778] transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#F8F5F1]/60">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="block hover:text-[#B89778] transition-colors">Shipping</a>
              <a href="#returns" className="block hover:text-[#B89778] transition-colors">Returns</a>
              <a href="#care" className="block hover:text-[#B89778] transition-colors">Jewelry Care</a>
              <a href="#contact" className="block hover:text-[#B89778] transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#F8F5F1]/60">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#B89778] transition-colors">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#B89778] transition-colors">Journal</Link>
              <a href="#sustainability" className="block hover:text-[#B89778] transition-colors">Sustainability</a>
              <a href="#careers" className="block hover:text-[#B89778] transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F8F5F1]/60">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex gap-3 tracking-[0.1em]">
              VISA · MC · AMEX · APPLE PAY
            </div>
            
            {/* Social */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89778] transition-colors">PT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
