import React from 'react';
import { Link } from 'react-router-dom';

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
];

const companyLinks = [
  { label: 'Our Story', to: '#' },
  { label: 'Journal', to: '#' },
  { label: 'Sustainability', to: '#' },
  { label: 'Careers', to: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Logo + description */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-cream font-medium">
              VELMORA
            </Link>
            <p className="text-cream/50 text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, designed to be treasured.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream/50 transition-colors text-xs font-medium"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-sans font-semibold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-cream/50 hover:text-cream text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-sans font-semibold mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.to} className="text-cream/50 hover:text-cream text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-sans font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.to} className="text-cream/50 hover:text-cream text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((card) => (
              <span
                key={card}
                className="text-[10px] tracking-wider uppercase text-cream/30 bg-cream/5 px-2 py-1 rounded"
              >
                {card}
              </span>
            ))}
          </div>
          <p className="text-cream/30 text-xs">
            &copy; 2025 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
