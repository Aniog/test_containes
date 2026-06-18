import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white hover:opacity-80 transition-opacity">
              VELMORA
            </Link>
            <p className="mt-4 text-sm font-sans text-white/60 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm font-sans text-white/70">Shipping & Returns</span></li>
              <li><span className="text-sm font-sans text-white/70">Size Guide</span></li>
              <li><span className="text-sm font-sans text-white/70">Care Instructions</span></li>
              <li><span className="text-sm font-sans text-white/70">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm font-sans text-white/70 hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm font-sans text-white/70">Sustainability</span></li>
              <li><span className="text-sm font-sans text-white/70">Press</span></li>
              <li><span className="text-sm font-sans text-white/70">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs font-sans text-white/40 border border-white/20 px-2 py-1 rounded">Visa</span>
            <span className="text-xs font-sans text-white/40 border border-white/20 px-2 py-1 rounded">Mastercard</span>
            <span className="text-xs font-sans text-white/40 border border-white/20 px-2 py-1 rounded">Amex</span>
            <span className="text-xs font-sans text-white/40 border border-white/20 px-2 py-1 rounded">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-sans text-white/50 hover:text-gold transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs font-sans text-white/50 hover:text-gold transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs font-sans text-white/50 hover:text-gold transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
