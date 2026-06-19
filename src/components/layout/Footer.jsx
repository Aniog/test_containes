import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'New Arrivals', to: '/shop' },
    { label: 'Best Sellers', to: '/shop' },
  ];

  const helpLinks = [
    { label: 'FAQ', to: '/faq' },
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Care Guide', to: '/care' },
    { label: 'Contact Us', to: '/contact' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Press', to: '/press' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest block mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
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

          {/* Help Column */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
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

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
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

        {/* Payment Icons & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <CreditCard size={24} className="text-gray-400" />
            <span className="text-sm text-gray-400">Visa • Mastercard • Amex • PayPal</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
