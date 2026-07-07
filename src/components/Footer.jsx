import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide uppercase text-cream-50">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-charcoal-300 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in small batches for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-charcoal-300 hover:text-cream-50 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-charcoal-300 hover:text-cream-50 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-charcoal-300 hover:text-cream-50 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-4">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-4">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((brand) => (
              <span
                key={brand}
                className="px-2 py-1 bg-charcoal-800 rounded text-[10px] uppercase tracking-wide text-charcoal-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
