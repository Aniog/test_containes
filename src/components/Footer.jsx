import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] font-medium text-ink">
              VELMORA
            </Link>
            <p className="text-muted text-xs leading-relaxed mt-4 max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-muted text-xs hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-4">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-muted text-xs hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-ink mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <Link
                    to="/#story"
                    className="text-muted text-xs hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-champagne mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-[11px]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Payment icons as text for now */}
            <span className="text-[10px] text-muted tracking-wide">Visa</span>
            <span className="text-[10px] text-muted tracking-wide">Mastercard</span>
            <span className="text-[10px] text-muted tracking-wide">Amex</span>
            <span className="text-[10px] text-muted tracking-wide">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
