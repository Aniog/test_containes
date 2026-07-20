import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-brand-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="heading-serif text-2xl tracking-ultra-wide text-brand-100 font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated,
              hypoallergenic, and designed to be treasured every day.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-ultra-wide uppercase text-brand-300 font-semibold mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal-500">
              &copy; 2026 VELMORA Fine Jewelry. All rights reserved.
            </p>
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-[10px] px-2 py-1 border border-charcoal-700 rounded text-charcoal-500 font-medium"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
