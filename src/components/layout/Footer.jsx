import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const PAYMENT_ICONS = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Klarna'
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-cream">
              VELMORA
            </Link>
            <p className="mt-3 text-xs text-ink-400 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Elevated essentials at accessible prices.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-cream/70 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/collections/all" className="text-sm text-ink-400 hover:text-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="text-sm text-ink-400 hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="text-sm text-ink-400 hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="text-sm text-ink-400 hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/collections/sets" className="text-sm text-ink-400 hover:text-cream transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-cream/70 mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/shipping" className="text-sm text-ink-400 hover:text-cream transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-sm text-ink-400 hover:text-cream transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/care" className="text-sm text-ink-400 hover:text-cream transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="text-sm text-ink-400 hover:text-cream transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-ink-400 hover:text-cream transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-cream/70 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-ink-400 hover:text-cream transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-ink-400 hover:text-cream transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-ink-400 hover:text-cream transition-colors">Sustainability</Link></li>
              <li><Link to="/press" className="text-sm text-ink-400 hover:text-cream transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-ink-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {PAYMENT_ICONS.map((icon) => (
                <span
                  key={icon}
                  className="text-[10px] font-sans font-medium text-ink-500 bg-ink-800/50 px-2.5 py-1 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-ink-500 hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-ink-500 hover:text-cream transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-ink-500 hover:text-cream transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center md:text-left">
            <p className="text-xs text-ink-600">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}