import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-brand-cream no-underline tracking-wide-xl">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-text-light leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-cream mb-4">
              Shop
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-brand-text-light no-underline hover:text-brand-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-text-light no-underline hover:text-brand-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-text-light no-underline hover:text-brand-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-text-light no-underline hover:text-brand-cream transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-cream mb-4">
              Help
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-cream mb-4">
              Company
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Our Story</span></li>
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Press</span></li>
              <li><span className="text-sm text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-warm/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-text-light">Visa</span>
            <span className="text-xs text-brand-text-light">Mastercard</span>
            <span className="text-xs text-brand-text-light">Amex</span>
            <span className="text-xs text-brand-text-light">PayPal</span>
            <span className="text-xs text-brand-text-light">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Instagram</span>
            <span className="text-xs text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">Pinterest</span>
            <span className="text-xs text-brand-text-light cursor-pointer hover:text-brand-cream transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
