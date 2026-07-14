import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RefreshCw } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
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
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Wholesale', path: '/wholesale' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-warm-white">
      {/* Trust Badges */}
      <div className="border-b border-velmora-dark-gray/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-velmora-gold" />
              <span className="text-sm">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-3">
              <RefreshCw className="w-5 h-5 text-velmora-gold" />
              <span className="text-sm">30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-velmora-gold" />
              <span className="text-sm">18K Gold Plated</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-velmora-gold text-lg">✓</span>
              <span className="text-sm">Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl font-light tracking-wider text-velmora-warm-white mb-6 block">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-medium-gray mb-6 leading-relaxed">
              Quiet luxury for the modern woman. Demi-fine jewelry crafted to be treasured, worn, and loved.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-velmora-medium-gray hover:text-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-velmora-medium-gray hover:text-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-velmora-medium-gray hover:text-velmora-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-velmora-warm-white">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-medium-gray hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-velmora-warm-white">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-medium-gray hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-velmora-warm-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-medium-gray hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-dark-gray/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-velmora-medium-gray">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-velmora-medium-gray">Payment Methods:</span>
              <div className="flex space-x-2">
                <span className="text-xs bg-velmora-dark-gray/50 px-2 py-1 rounded">VISA</span>
                <span className="text-xs bg-velmora-dark-gray/50 px-2 py-1 rounded">MC</span>
                <span className="text-xs bg-velmora-dark-gray/50 px-2 py-1 rounded">AMEX</span>
                <span className="text-xs bg-velmora-dark-gray/50 px-2 py-1 rounded">PP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
