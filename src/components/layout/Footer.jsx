import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop', label: 'All Jewelry' },
  ];

  const helpLinks = [
    { to: '#', label: 'Shipping & Returns' },
    { to: '#', label: 'Size Guide' },
    { to: '#', label: 'FAQ' },
    { to: '#', label: 'Contact Us' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '#', label: 'Sustainability' },
    { to: '#', label: 'Press' },
  ];

  return (
    <footer className="bg-surface-primary border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl font-medium tracking-wide text-brand-100">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-400 leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman who values quiet luxury.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-brand-500 hover:text-gold text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: 'Shop', links: shopLinks },
            { title: 'Help', links: helpLinks },
            { title: 'Company', links: companyLinks },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-200 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-400 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hairline mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-600">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons — text placeholders */}
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-[10px] uppercase tracking-wider text-brand-600 border border-brand-800 px-2 py-1"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
