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
            <p className="mt-4 text-sm text-brand-soft-gray leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-wider uppercase font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-wider uppercase font-medium mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-wider uppercase font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Journal</span></li>
              <li><span className="text-sm text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-graphite flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-soft-gray">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-soft-gray">Visa</span>
            <span className="text-xs text-brand-soft-gray">Mastercard</span>
            <span className="text-xs text-brand-soft-gray">Amex</span>
            <span className="text-xs text-brand-soft-gray">PayPal</span>
            <span className="text-xs text-brand-soft-gray">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs text-brand-soft-gray hover:text-brand-cream transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
