import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-near-black text-taupe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-lg text-gold">
              VELMORA
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Each piece designed to be treasured — and to treasure yourself.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4 font-medium">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-sm hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm hover:text-gold transition-colors">Sets & Gifts</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4 font-medium">Help</h4>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-gold transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-sm hover:text-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-sm hover:text-gold transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4 font-medium">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-gold transition-colors">Journal</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-gold transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-taupe-light/60">Visa</span>
              <span className="text-xs text-taupe-light/60">MC</span>
              <span className="text-xs text-taupe-light/60">Amex</span>
              <span className="text-xs text-taupe-light/60">PayPal</span>
              <span className="text-xs text-taupe-light/60">Afterpay</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Pinterest">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-xs text-taupe-light/60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}