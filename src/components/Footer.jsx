import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'New Arrivals', path: '/shop?sort=newest' },
      { label: 'Best Sellers', path: '/shop?sort=bestsellers' }
    ],
    Help: [
      { label: 'Shipping Info', path: '/shipping' },
      { label: 'Returns', path: '/returns' },
      { label: 'Size Guide', path: '/size-guide' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' }
    ],
    Company: [
      { label: 'Our Story', path: '/about' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Press', path: '/press' },
      { label: 'Careers', path: '/careers' },
      { label: 'Journal', path: '/journal' }
    ]
  };

  return (
    <footer className="bg-velmora-charcoal text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="font-serif text-3xl uppercase tracking-widest mb-6 block">
              Velmora
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Timeless demi-fine jewelry crafted for life's most precious moments. 
              Elevating everyday elegance with 18K gold plated pieces.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-serif text-lg uppercase tracking-wider mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-velmora-gold transition-colors text-sm uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Icons */}
        <div className="border-t border-velmora-charcoal-light pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((payment) => (
              <div
                key={payment}
                className="px-4 py-2 border border-gray-600 text-gray-400 text-sm uppercase tracking-wider"
              >
                {payment}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}