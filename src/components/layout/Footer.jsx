import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-sand/80 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-brand-sand/60 hover:text-brand-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="text-brand-sand/60 hover:text-brand-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.5-2 4-3.5 4-.8 0-1.2-.5-1-1.2l.8-3.2" />
                  <path d="M9.5 19l1-4" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-brand-sand/60 hover:text-brand-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-brand-sand">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-brand-sand">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-brand-sand">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-brand-sand/70 hover:text-brand-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-brand-slate/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-sand/50">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Shop Pay'].map(method => (
              <span key={method} className="text-[10px] text-brand-sand/40 border border-brand-slate/30 px-2 py-0.5 rounded-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
