import React from 'react';
import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/collection' },
      { label: 'Earrings', to: '/collection?category=earrings' },
      { label: 'Necklaces', to: '/collection?category=necklaces' },
      { label: 'Huggies', to: '/collection?category=huggies' },
      { label: 'Gift Sets', to: '/collection' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
      { label: 'Track Order', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '#' },
      { label: 'Sustainability', to: '#' },
      { label: 'Journal', to: '#' },
      { label: 'Press', to: '#' },
      { label: 'Careers', to: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'TikTok', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-divider">
      <div className="section-padding py-16 md:py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-mega-wide text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-muted leading-relaxed max-w-[240px]">
              Crafted to be treasured. Demi-fine 18K gold jewelry designed for everyday luxury.
            </p>
            <div className="flex gap-5 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs tracking-wider uppercase text-cream-muted hover:text-gold transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-cream mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream-muted hover:text-cream transition-colors duration-300"
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
        <div className="mt-16 pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <span key={icon} className="text-[10px] tracking-wider uppercase text-cream-dim border border-divider px-2.5 py-1 rounded">
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream-dim">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
