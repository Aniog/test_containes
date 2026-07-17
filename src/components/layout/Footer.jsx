import React from 'react';
import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping Info', to: '#' },
      { label: 'Returns & Exchanges', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '#' },
      { label: 'Journal', to: '#' },
      { label: 'Sustainability', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-22">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-velmora-white font-medium">
              VELMORA
            </Link>
            <p className="mt-5 text-body-sm text-velmora-white/50 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman — 
              premium quality at accessible prices.
            </p>
            <div className="flex items-center gap-5 mt-8">
              {['Instagram', 'TikTok', 'Pinterest', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-caption uppercase tracking-[0.1em] text-velmora-white/40 hover:text-velmora-gold transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-caption uppercase tracking-[0.15em] text-velmora-white font-medium mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-body-sm text-velmora-white/50 hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-hairline border-velmora-white/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-caption uppercase tracking-wider text-velmora-white/30 font-sans"
                >
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-body-sm text-velmora-white/30 font-sans">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
