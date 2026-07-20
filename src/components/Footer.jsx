import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-ultra-wide text-brand-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-cream/60 leading-relaxed font-sans">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, accessible luxury.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-ultra-wide text-brand-gold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=Earrings" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-ultra-wide text-brand-gold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Care Guide</a></li>
              <li><a href="#" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Contact Us</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-ultra-wide text-brand-gold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Our Story</Link></li>
              <li><a href="#" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Journal</a></li>
              <li><a href="#" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-cream/70 hover:text-brand-gold transition-colors font-sans">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-cream/40 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-cream/40 hover:text-brand-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-brand-cream/40 hover:text-brand-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-brand-cream/40 hover:text-brand-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-brand-cream/30">
            <span className="text-xs font-sans">Visa</span>
            <span className="text-xs font-sans">·</span>
            <span className="text-xs font-sans">Mastercard</span>
            <span className="text-xs font-sans">·</span>
            <span className="text-xs font-sans">Apple Pay</span>
            <span className="text-xs font-sans">·</span>
            <span className="text-xs font-sans">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
