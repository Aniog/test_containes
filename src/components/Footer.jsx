import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-base-dark text-white">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-plus font-medium uppercase">
              Velmora
            </Link>
            <p className="font-sans text-sm text-white/60 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-white/80 mb-6">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-white/80 mb-6">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-white/50 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-white/80 mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-white/50 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="font-sans text-[10px] uppercase tracking-wider text-white/40 border border-white/15 px-2 py-1 rounded"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
