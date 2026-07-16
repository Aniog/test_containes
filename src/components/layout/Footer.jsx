import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ],
  company: [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Careers', path: '/careers' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl font-light tracking-wider text-cream-100">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-400 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates timeless elegance.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-cream-300 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs text-charcoal-500 bg-charcoal-800 px-2 py-1 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-charcoal-500">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
