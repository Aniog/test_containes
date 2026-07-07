import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'New Arrivals', path: '/shop?sort=new' },
    { label: 'Bestsellers', path: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { label: 'FAQ', path: '/faq' },
    { label: 'Shipping & Returns', path: '/shipping' },
    { label: 'Size Guide', path: '/size-guide' },
    { label: 'Care Instructions', path: '/care' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Press', path: '/press' },
    { label: 'Careers', path: '/careers' },
    { label: 'Journal', path: '/journal' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-warm">
      {/* Newsletter Section */}
      <div className="border-b border-velmora-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-3xl text-white mb-4">
              Join the Velmora Family
            </h3>
            <p className="text-velmora-mist mb-8">
              Subscribe for exclusive access, new arrivals, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-velmora-graphite text-white placeholder-velmora-mist border border-velmora-graphite focus:border-velmora-gold focus:outline-none transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-gold text-white font-medium tracking-wider uppercase text-sm hover:bg-velmora-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              using 18K gold plating and hypoallergenic materials.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Help</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-velmora-mist">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-velmora-mist">
              <CreditCard size={20} />
              <span className="text-sm">Secure payments with</span>
              <span className="font-medium text-white">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
