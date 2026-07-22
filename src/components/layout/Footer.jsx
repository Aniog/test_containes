import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl">VELMORA</Link>
            <p className="text-sm text-brand-muted-light mt-4 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-brand-cream">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-brand-cream">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-brand-cream">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold-light transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs text-brand-muted-light border border-white/20 px-2 py-1 rounded-sm">Visa</span>
            <span className="text-xs text-brand-muted-light border border-white/20 px-2 py-1 rounded-sm">Mastercard</span>
            <span className="text-xs text-brand-muted-light border border-white/20 px-2 py-1 rounded-sm">Amex</span>
            <span className="text-xs text-brand-muted-light border border-white/20 px-2 py-1 rounded-sm">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-brand-muted-light hover:text-brand-gold-light transition-colors">Instagram</a>
            <a href="#" className="text-xs text-brand-muted-light hover:text-brand-gold-light transition-colors">Pinterest</a>
            <a href="#" className="text-xs text-brand-muted-light hover:text-brand-gold-light transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
