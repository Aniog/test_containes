import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'],
    Help: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'],
    Company: ['Our Story', 'Journal', 'Sustainability', 'Press', 'Wholesale'],
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 7.04 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-7.04C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Pinterest', icon: 'M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387-.03-.82-.05-2.122-.016-3.055.218-1.318 1.406-8.394 1.406-8.394s-.36-.72-.36-1.78c0-1.668.967-2.914 2.173-2.914 1.023 0 1.518.77 1.518 1.69 0 1.032-.658 2.572-.997 4.003-.283 1.194.602 2.164 1.78 2.164 2.135 0 3.77-2.25 3.77-5.495 0-2.873-2.064-4.886-5.006-4.886-3.41 0-5.409 2.56-5.409 5.2 0 1.027.395 2.127.889 2.726a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.16-1.499-.698-2.436-2.89-2.436-4.648 0-3.78 2.748-7.254 7.928-7.254 4.165 0 7.398 2.967 7.398 6.93 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with 18K gold plating for everyday luxury.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-400 hover:text-[#C9A96E] transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-serif text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-[#C9A96E] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Payment Icons */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400 mr-2">Payment:</span>
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
              <div
                key={payment}
                className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded"
              >
                {payment}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
