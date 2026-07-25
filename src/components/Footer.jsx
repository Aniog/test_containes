import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0C0A] text-[#E5DFD3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[3px] text-white mb-4">VELMORA</div>
            <p className="text-xs text-[#6B6259] max-w-[180px]">
              Demi-fine jewelry crafted with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="filter-label mb-4 text-white/60">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#C5A46E] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#C5A46E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#C5A46E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#C5A46E] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-[#C5A46E] transition-colors">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="filter-label mb-4 text-white/60">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-[#C5A46E] transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-[#C5A46E] transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-[#C5A46E] transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-[#C5A46E] transition-colors">Contact Us</a></li>
              <li><a href="#size" className="hover:text-[#C5A46E] transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="filter-label mb-4 text-white/60">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#C5A46E] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#C5A46E] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#C5A46E] transition-colors">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#C5A46E] transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6B6259]">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#C5A46E] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#C5A46E] transition-colors">Terms</a>
            <a href="#accessibility" className="hover:text-[#C5A46E] transition-colors">Accessibility</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-[10px] tracking-[1px]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}