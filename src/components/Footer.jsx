import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide">VELMORA</Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-wide-xl uppercase font-medium mb-4 text-white/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-wide-xl uppercase font-medium mb-4 text-white/80">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-wide-xl uppercase font-medium mb-4 text-white/80">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Contact</span></li>
              <li><span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40 border border-white/20 px-2 py-1 rounded-sm">Visa</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-1 rounded-sm">Mastercard</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-1 rounded-sm">Amex</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-1 rounded-sm">PayPal</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
