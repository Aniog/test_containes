import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '#' },
      { label: 'Size Guide', path: '#' },
      { label: 'FAQ', path: '#' },
      { label: 'Contact Us', path: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '#about' },
      { label: 'Journal', path: '#journal' },
      { label: 'Sustainability', path: '#' },
      { label: 'Careers', path: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] font-light text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-[11px] uppercase tracking-nav font-medium text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/40 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map(icon => (
              <span
                key={icon}
                className="text-[10px] font-sans font-medium text-white/30 bg-white/5 px-2 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
