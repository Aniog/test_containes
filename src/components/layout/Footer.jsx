import React from 'react';
import { Link } from 'react-router-dom';

const footerSections = [
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
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-warm-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          {/* Logo & brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-light tracking-widest-xl uppercase text-white">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-xs font-medium text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif text-sm tracking-widest uppercase text-white/80 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/40 hover:text-gold-light transition-colors duration-300"
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
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {/* Payment icons */}
              <div className="flex items-center gap-3">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                  <span
                    key={method}
                    className="text-[10px] font-medium text-white/30 border border-white/10 rounded px-1.5 py-0.5"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
