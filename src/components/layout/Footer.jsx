import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', path: '/shop' },
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'Gift Sets', path: '/shop' },
  ],
  help: [
    { label: 'Shipping & Returns', path: '/about' },
    { label: 'Care Guide', path: '/about' },
    { label: 'Size Guide', path: '/about' },
    { label: 'FAQ', path: '/about' },
    { label: 'Contact Us', path: '/about' },
  ],
  company: [
    { label: 'Our Story', path: '/about' },
    { label: 'Sustainability', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Press', path: '/about' },
    { label: 'Careers', path: '/about' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-400 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman — 
              premium quality at accessible prices.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-velvet-700 flex items-center justify-center text-velvet-400 hover:text-white hover:border-gilded-600 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-overline text-velvet-200 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-velvet-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-velvet-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="px-2.5 py-1 border border-velvet-700 rounded text-[10px] text-velvet-400 font-medium"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
