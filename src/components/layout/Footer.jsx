import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-3xl font-light tracking-[0.2em] text-gray-900 font-['Cormorant_Garamond']"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Crafting timeless jewelry pieces that celebrate life's precious moments.
              Each piece is designed with love and made to be treasured.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link
                    to="/help"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Sustainability', 'Press', 'Careers'].map((link) => (
                <li key={link}>
                  <Link
                    to="/about"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons and Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-gray-600">Secure Payment:</span>
            <div className="flex space-x-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
                <span
                  key={payment}
                  className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  {payment}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Twitter, href: '#' }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
