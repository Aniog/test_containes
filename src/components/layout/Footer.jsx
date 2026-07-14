import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

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
    { name: 'Size Guide', path: '/sizing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link 
              to="/" 
              className="font-serif text-3xl tracking-widest text-velmora-gold-light mb-6 block"
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm text-velmora-taupe mb-6 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention, 
              made to celebrate life's moments — both ordinary and extraordinary.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-velmora-gold-light mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-taupe hover:text-velmora-gold-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-velmora-gold-light mb-6">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-taupe hover:text-velmora-gold-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-velmora-gold-light mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-taupe hover:text-velmora-gold-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="mt-12 pt-8 border-t border-velmora-espresso/30">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <CreditCard size={24} className="text-velmora-taupe" />
              <span className="font-sans text-xs text-velmora-muted uppercase tracking-wider">
                Visa · Mastercard · Amex · PayPal · Apple Pay
              </span>
            </div>
            <p className="font-sans text-xs text-velmora-muted">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
