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
      { label: 'Shipping & Returns', to: '/about' },
      { label: 'Size Guide', to: '/about' },
      { label: 'Care Instructions', to: '/about' },
      { label: 'FAQ', to: '/about' },
      { label: 'Contact Us', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Press', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal'];

export default function Footer() {
  return (
    <footer className="bg-base border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-16 lg:py-20">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-2xl text-gold font-semibold uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-wider uppercase text-text-muted hover:text-gold transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest-xl uppercase font-semibold text-text-primary mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-text-muted hover:text-gold transition-colors duration-300"
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
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[10px] tracking-wider uppercase text-text-muted/60 border border-border rounded px-2 py-1"
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
