import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-velmora-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-50 block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-300 leading-relaxed">
              Demi-fine jewelry crafted with intention. Designed for the modern woman who values quality and understated elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-velmora-100 mb-4">Shop</h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-velmora-300 hover:text-velmora-50 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-velmora-100 mb-4">Help</h3>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-300 hover:text-velmora-50 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-velmora-100 mb-4">Company</h3>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-300 hover:text-velmora-50 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-velmora-400">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-4">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span key={method} className="text-xs text-velmora-400 bg-charcoal-800 px-2 py-1 rounded">
                {method}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-velmora-300 hover:text-velmora-50 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-300 hover:text-velmora-50 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-300 hover:text-velmora-50 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-300 hover:text-velmora-50 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
