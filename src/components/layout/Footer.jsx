import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
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
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <footer className="bg-charcoal text-ivory py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link 
              to="/" 
              className="font-serif text-3xl tracking-widest text-ivory"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              Fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with care, and meant to be worn and loved for years to come.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ivory hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-ivory hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-ivory hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-6 text-gold-light">
              Shop
            </h3>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-gold transition-colors opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-6 text-gold-light">
              Help
            </h3>
            <ul className="space-y-4">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-gold transition-colors opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-6 text-gold-light">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-gold transition-colors opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs opacity-60">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <CreditCard size={24} className="text-ivory opacity-60" />
              <span className="text-xs opacity-60">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
