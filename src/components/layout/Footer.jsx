import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Best Sellers', path: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Guide', path: '/care' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-8 mb-12 pb-12 border-b border-velmora-charcoal-light">
          <div className="flex flex-col items-center text-center">
            <Truck size={32} className="mb-3 text-velmora-gold" />
            <h3 className="font-sans text-sm tracking-wider uppercase mb-1">Free Shipping</h3>
            <p className="text-xs text-gray-400">On orders over $50</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={32} className="mb-3 text-velmora-gold" />
            <h3 className="font-sans text-sm tracking-wider uppercase mb-1">30-Day Returns</h3>
            <p className="text-xs text-gray-400">Hassle-free returns</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CreditCard size={32} className="mb-3 text-velmora-gold" />
            <h3 className="font-sans text-sm tracking-wider uppercase mb-1">Secure Payment</h3>
            <p className="text-xs text-gray-400">Encrypted & safe</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase mb-4 block">
              Velmora
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Demi-fine jewelry crafted with intention. Each piece is designed to be treasured, worn, and loved.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-sans text-sm tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-sans text-sm tracking-wider uppercase mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-sans text-sm tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-velmora-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-velmora-charcoal-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-400">Payment methods:</span>
            <CreditCard size={24} className="text-gray-400" />
            <span className="text-xs text-gray-400">Visa, Mastercard, Amex, PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
