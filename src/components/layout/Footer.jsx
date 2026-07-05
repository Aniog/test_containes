import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' }
    ],
    help: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Care Instructions', to: '/care' },
      { label: 'FAQ', to: '/faq' }
    ],
    company: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/careers' }
    ]
  };

  const paymentIcons = [
    { name: 'Visa', path: 'M4 4h16v16H4V4zm2 4h2v8H6V8zm4 0h2v8h-2V8zm4 0h2v8h-2V8z' },
    { name: 'Mastercard', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z' },
    { name: 'Amex', path: 'M3 5h18v14H3V5zm2 2v10h14V7H5z' },
    { name: 'PayPal', path: 'M7 4h10l11 16H7L7 4zm2 2l.3.5h8.4L11.5 10H9l.5-1H10l.5-1H9l.5-1H9.5l.5-1z' }
  ];

  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Timeless designs, accessible luxury, made to be treasured.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs tracking-wider text-gray-400 mb-4">SHOP</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs tracking-wider text-gray-400 mb-4">HELP</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs tracking-wider text-gray-400 mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div 
                  key={icon.name}
                  className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                  title={icon.name}
                >
                  <span className="text-[10px] text-gray-400 font-medium">
                    {icon.name.substring(0, 4)}
                  </span>
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
