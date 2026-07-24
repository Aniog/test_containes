import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pin } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'Size Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Affiliates', 'Wholesale'];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] font-semibold text-brand-gold">
              VELMORA
            </Link>
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated, ethically made, designed for every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors" aria-label="Pinterest">
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/60 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-white/40 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/60 mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/60 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
