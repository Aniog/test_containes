import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-cream-50">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-warm-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in small batches with intention and care.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-50 mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-warm-400 hover:text-cream-50 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-50 mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-warm-400 hover:text-cream-50 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-50 mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-warm-400 hover:text-cream-50 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-xs text-warm-500">Visa</span>
            <span className="text-xs text-warm-500">Mastercard</span>
            <span className="text-xs text-warm-500">Amex</span>
            <span className="text-xs text-warm-500">PayPal</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-warm-400 hover:text-cream-50 transition-colors">
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-warm-400 hover:text-cream-50 transition-colors">
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-warm-400 hover:text-cream-50 transition-colors">
              <Twitter className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
          <p className="text-xs text-warm-600">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
