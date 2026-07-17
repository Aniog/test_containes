import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F2ED] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[3px] mb-4">VELMORA</div>
            <p className="text-sm text-white/60 max-w-[180px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[2px] text-white/50 mb-4">SHOP</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#C5A46E] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#C5A46E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#C5A46E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#C5A46E] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[2px] text-white/50 mb-4">HELP</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#C5A46E] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#C5A46E] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#C5A46E] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#C5A46E] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[2px] text-white/50 mb-4">COMPANY</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#C5A46E] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#C5A46E] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#C5A46E] transition-colors">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#C5A46E] transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 tracking-[1px]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">IG</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">PT</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A46E] transition-colors">TT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
