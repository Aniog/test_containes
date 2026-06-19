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
    { to: '#', label: 'Our Story' },
    { to: '#', label: 'Sustainability' },
    { to: '#', label: 'Journal' },
    { to: '#', label: 'Careers' },
  ];

  const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-charcoal-800 text-cream-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-cream-50 block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-cream-300/80 max-w-xs leading-relaxed mb-6">
              Fine jewelry crafted to be treasured. Premium 18K gold plated pieces
              designed for the modern woman — accessible luxury, made to last.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-cream-200/20 flex items-center justify-center text-cream-300/60 hover:text-cream-50 hover:border-cream-200/40 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream-200/60 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300/80 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream-200/60 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300/80 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream-200/60 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-300/80 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream-200/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon}
                  className="px-3 py-1.5 border border-cream-200/15 rounded text-[10px] font-medium text-cream-300/50 uppercase tracking-wider"
                >
                  {icon}
                </div>
              ))}
            </div>
            <p className="text-xs text-cream-300/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
