import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, accessible luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-super-wide text-brand-gold mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-white transition-colors font-sans">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-super-wide text-brand-gold mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Contact Us</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Care Instructions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-super-wide text-brand-gold mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Our Story</Link></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Press</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors font-sans">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40 font-sans">Visa</span>
            <span className="text-xs text-white/40 font-sans">Mastercard</span>
            <span className="text-xs text-white/40 font-sans">Amex</span>
            <span className="text-xs text-white/40 font-sans">PayPal</span>
            <span className="text-xs text-white/40 font-sans">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
