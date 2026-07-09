import React from 'react';
import { Link } from 'react-router-dom';

const shopLinks = [
  { label: 'All Jewelry', to: '/collection' },
  { label: 'Earrings', to: '/collection?category=earrings' },
  { label: 'Necklaces', to: '/collection?category=necklaces' },
  { label: 'Huggies', to: '/collection?category=huggies' },
  { label: 'Gift Sets', to: '/collection?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'Contact Us', to: '#' },
];

const companyLinks = [
  { label: 'Our Story', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
  { label: 'Sustainability', to: '#' },
  { label: 'Press', to: '#' },
];

const socialLinks = [
  { label: 'Instagram', icon: 'IG', href: '#' },
  { label: 'Pinterest', icon: 'PI', href: '#' },
  { label: 'TikTok', icon: 'TK', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-wider text-white block mb-4">
              VELMORA
            </Link>
            <p className="text-warm-400 text-sm leading-relaxed max-w-xs mb-6">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic,
              designed for everyday elegance.
            </p>

            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple'].map(brand => (
                <div
                  key={brand}
                  className="w-12 h-8 bg-warm-800 rounded flex items-center justify-center"
                >
                  <span className="text-[9px] font-sans font-medium text-warm-400 tracking-wider">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-warm-400 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-warm-400 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-warm-400 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-warm-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-warm-500 text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-warm-700 flex items-center justify-center text-warm-400 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <span className="text-[10px] font-sans font-semibold tracking-wider">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
