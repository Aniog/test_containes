import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'Size Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Stockists', 'Careers'];

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/70 pt-20 pb-10">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest font-semibold text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[240px]">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/90 font-medium mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/90 font-medium mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/90 font-medium mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/about" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] text-white/40 tracking-wider uppercase">
            <span>Visa</span>
            <span className="text-white/20">·</span>
            <span>Mastercard</span>
            <span className="text-white/20">·</span>
            <span>Amex</span>
            <span className="text-white/20">·</span>
            <span>PayPal</span>
            <span className="text-white/20">·</span>
            <span>Apple Pay</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors" aria-label="Instagram">
              <Instagram className="w-4.5 h-4.5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors" aria-label="Facebook">
              <Facebook className="w-4.5 h-4.5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors" aria-label="Website">
              <Globe className="w-4.5 h-4.5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
