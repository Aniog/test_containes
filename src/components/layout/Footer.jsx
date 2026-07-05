import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { to: '/shop?category=earrings', label: 'Earrings' },
  { to: '/shop?category=necklaces', label: 'Necklaces' },
  { to: '/shop', label: 'All Jewelry' },
  { to: '/shop?category=sets', label: 'Gift Sets' },
];

const helpLinks = [
  { to: '#', label: 'Shipping & Returns' },
  { to: '#', label: 'Size Guide' },
  { to: '#', label: 'Jewelry Care' },
  { to: '#', label: 'Contact Us' },
];

const companyLinks = [
  { to: '#', label: 'Our Story' },
  { to: '#', label: 'Sustainability' },
  { to: '#', label: 'Journal' },
  { to: '#', label: 'Stockists' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream/80">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-velmora-cream/50 max-w-xs">
              Demi-fine jewelry for the modern woman. Crafted with 18K gold plating and designed to be treasured, every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-velmora-cream/50 hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-cream mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-velmora-cream/50 hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-velmora-cream/50 hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-divider border-velmora-cream/10 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-velmora-cream/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
          <div className="flex items-center gap-3 font-sans text-xs text-velmora-cream/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}