import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-white border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest-xl text-velmora-base"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces, accessible luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map(item => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-velmora-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(payment => (
              <span
                key={payment}
                className="text-[10px] text-velmora-muted-light border border-velmora-border px-2 py-1 rounded-sm"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
