import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="text-white/50 text-xs mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in New York, worn worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=Earrings" className="text-sm text-white/60 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-white/60 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-white/60 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-white/60 hover:text-white transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-5">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/shipping" className="text-sm text-white/60 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/size-guide" className="text-sm text-white/60 hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-sm text-white/60 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-sm text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-sm text-white/60 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-white/40 tracking-wider uppercase">Visa</span>
            <span className="text-[10px] text-white/40 tracking-wider uppercase">Mastercard</span>
            <span className="text-[10px] text-white/40 tracking-wider uppercase">Amex</span>
            <span className="text-[10px] text-white/40 tracking-wider uppercase">PayPal</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Instagram className="w-4 h-4" strokeWidth={1.5} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Facebook className="w-4 h-4" strokeWidth={1.5} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter className="w-4 h-4" strokeWidth={1.5} /></a>
          </div>
          <p className="text-[10px] text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
