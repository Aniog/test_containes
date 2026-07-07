import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Best Sellers', path: '/shop?sort=bestsellers' }
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <footer className="bg-velmora-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-700">
          {[
            { icon: Truck, text: 'Free Worldwide Shipping' },
            { icon: RotateCcw, text: '30-Day Returns' },
            { icon: Shield, text: '18K Gold Plated' },
            { icon: CreditCard, text: 'Secure Payment' }
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <badge.icon className="w-5 h-5 text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">{badge.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-widest uppercase text-white hover:text-velmora-gold transition-colors duration-300">
              Velmora
            </Link>
            <p className="font-sans text-sm text-gray-400 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with 18K gold plating for everyday luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-sm font-medium tracking-wider uppercase mb-6">Shop</h3>
            <nav className="flex flex-col space-y-3">
              {shopLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans text-sm text-gray-400 hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-serif text-sm font-medium tracking-wider uppercase mb-6">Help</h3>
            <nav className="flex flex-col space-y-3">
              {helpLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans text-sm text-gray-400 hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-sm font-medium tracking-wider uppercase mb-6">Company</h3>
            <nav className="flex flex-col space-y-3">
              {companyLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans text-sm text-gray-400 hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex items-center justify-center gap-4 py-8 border-t border-gray-700">
          {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((payment, index) => (
            <div key={index} className="px-3 py-2 bg-gray-700 rounded text-xs font-sans text-gray-400">
              {payment}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="font-sans text-xs text-gray-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
