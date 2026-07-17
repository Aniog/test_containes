import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Globe } from 'lucide-react';

const paymentIcons = [
  { name: 'Visa', icon: 'VISA' },
  { name: 'Mastercard', icon: 'MC' },
  { name: 'Amex', icon: 'AMEX' },
  { name: 'PayPal', icon: 'PayPal' },
  { name: 'Afterpay', icon: 'Afterpay' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-50/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-cream-50">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-50/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces designed for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream-50/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-50/50 hover:text-gold transition-colors" aria-label="Pinterest">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-50/50 hover:text-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-cream-50 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-cream-50 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-cream-50 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-cream-50/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {paymentIcons.map((p) => (
                <span
                  key={p.name}
                  className="text-xs text-cream-50/40 font-sans tracking-wider"
                >
                  {p.icon}
                </span>
              ))}
            </div>
            <p className="text-xs text-cream-50/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}