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
    { name: 'Careers', path: '/careers' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="text-3xl font-serif font-light tracking-[0.25em] block mb-6"
            >
              VELMORA
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with 18k gold plated materials that are beautiful, durable, and accessible.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-cream hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-cream hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-cream hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <CreditCard size={24} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Secure payment options</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
