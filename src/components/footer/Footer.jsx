// Footer Component for Velmora Fine Jewelry

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Best Sellers', path: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Journal', path: '/journal' },
    { name: 'Stockists', path: '/stockists' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-white pt-16 pb-8">
      <div className="container-premium">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-3xl tracking-widest text-white block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              using 18K gold plating and hypoallergenic materials.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg mb-6">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2">Payment methods:</span>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-300">VISA</span>
                </div>
                <div className="w-10 h-6 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-300">MC</span>
                </div>
                <div className="w-10 h-6 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-300">AMEX</span>
                </div>
                <div className="w-10 h-6 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-300">PP</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
