import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide">VELMORA</Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-brand-muted hover:text-brand-gold transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-muted hover:text-brand-gold transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-muted hover:text-brand-gold transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wide-xl font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wide-xl font-medium mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wide-xl font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Journal</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-warm-gray/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-brand-muted">Visa</span>
            <span className="text-xs text-brand-muted">Mastercard</span>
            <span className="text-xs text-brand-muted">Amex</span>
            <span className="text-xs text-brand-muted">PayPal</span>
            <span className="text-xs text-brand-muted">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
