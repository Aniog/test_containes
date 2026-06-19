import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', path: '/shop' },
  { label: 'Earrings', path: '/shop?category=earrings' },
  { label: 'Necklaces', path: '/shop?category=necklaces' },
  { label: 'Huggies', path: '/shop?category=huggies' },
  { label: 'Gift Sets', path: '/shop?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', path: '#' },
  { label: 'Size Guide', path: '#' },
  { label: 'FAQ', path: '#' },
  { label: 'Contact Us', path: '#' },
  { label: 'Track Order', path: '#' },
];

const companyLinks = [
  { label: 'Our Story', path: '/about' },
  { label: 'Journal', path: '/journal' },
  { label: 'Sustainability', path: '#' },
  { label: 'Press', path: '#' },
  { label: 'Careers', path: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-black text-velmora-sand">
      {/* Main footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest-xl text-gold">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm text-velmora-stone leading-relaxed max-w-[220px]">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-stone hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-stone hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-stone hover:text-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-caption uppercase tracking-widest-xl text-velmora-sand/80 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-stone hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-caption uppercase tracking-widest-xl text-velmora-sand/80 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-stone hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-caption uppercase tracking-widest-xl text-velmora-sand/80 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-stone hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment & copyright */}
      <div className="section-padding border-t border-velmora-charcoal/50">
        <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-sans text-[11px] text-velmora-stone/60 uppercase tracking-wider">
              Visa
            </span>
            <span className="font-sans text-[11px] text-velmora-stone/60 uppercase tracking-wider">
              Mastercard
            </span>
            <span className="font-sans text-[11px] text-velmora-stone/60 uppercase tracking-wider">
              Amex
            </span>
            <span className="font-sans text-[11px] text-velmora-stone/60 uppercase tracking-wider">
              PayPal
            </span>
            <span className="font-sans text-[11px] text-velmora-stone/60 uppercase tracking-wider">
              Apple Pay
            </span>
          </div>
          <p className="font-sans text-[11px] text-velmora-stone/60">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
