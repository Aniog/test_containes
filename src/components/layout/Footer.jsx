import React from 'react';
import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/collections' },
      { label: 'Earrings', to: '/collections?category=earrings' },
      { label: 'Necklaces', to: '/collections?category=necklaces' },
      { label: 'Huggies', to: '/collections?category=huggies' },
      { label: 'Gift Sets', to: '/collections?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Care Instructions', to: '/care' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/careers' },
    ],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal'];

const socialLinks = [
  { name: 'Instagram', url: '#' },
  { name: 'Pinterest', url: '#' },
  { name: 'TikTok', url: '#' },
  { name: 'Facebook', url: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-semibold tracking-nav text-white">
                VELMORA
              </span>
            </Link>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-xs mb-8">
              Crafted to be treasured. Fine demi-fine jewelry designed for the modern woman who values quality, beauty, and everyday luxury.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors duration-200 text-xs font-medium"
                  aria-label={social.name}
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-caption uppercase tracking-caption font-sans font-medium text-white/90 mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-white/50 hover:text-gold font-sans text-sm transition-colors duration-200"
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
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon}
                  className="px-3 py-1.5 border border-white/15 rounded text-white/40 text-xs font-sans font-medium"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/30 font-sans text-xs">
              © 2025 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
