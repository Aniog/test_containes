import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Camera, Play } from 'lucide-react';

const SHOP_LINKS = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const HELP_LINKS = ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'];
const COMPANY_LINKS = ['Our Story', 'Sustainability', 'Journal', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] block mb-4">
              VELMORA
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. 18K gold-plated pieces designed to be treasured every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Youtube">
                <Play className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">SHOP</h4>
            <ul className="space-y-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-white/50 text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">HELP</h4>
            <ul className="space-y-2.5">
              {HELP_LINKS.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-white/50 text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-white/50 text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
