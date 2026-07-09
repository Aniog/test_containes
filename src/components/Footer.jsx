import React from 'react';
import { Mail, Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'All Jewelry', href: '/shop' },
    { name: 'Earrings', href: '/shop' },
    { name: 'Necklaces', href: '/shop' },
    { name: 'Huggies', href: '/shop' },
    { name: 'Gift Sets', href: '/shop' },
  ];

  const helpLinks = [
    { name: 'FAQ', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'Care Instructions', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Journal', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Sustainability', href: '#' },
  ];

  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <h3
              className="text-3xl font-light mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured.
              Meaningful pieces for life's special moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6 text-gold">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6 text-gold">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6 text-gold">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard size={24} />
              <span className="text-sm">Visa</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard size={24} />
              <span className="text-sm">Mastercard</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard size={24} />
              <span className="text-sm">Amex</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard size={24} />
              <span className="text-sm">PayPal</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard size={24} />
              <span className="text-sm">Apple Pay</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
