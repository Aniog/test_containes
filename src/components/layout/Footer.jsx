import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Heart } from 'lucide-react';

const footerLinks = {
  shop: {
    title: 'Shop',
    links: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' },
    ],
  },
  help: {
    title: 'Help',
    links: [
      { name: 'Shipping & Delivery', path: '/shipping' },
      { name: 'Returns & Exchanges', path: '/returns' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-deep-warm text-white/80">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed for lasting beauty and everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 .04-2.9.22-.9 1.4-5.9 1.4-5.9s-.36-.73-.36-1.8c0-1.7.98-3 2.2-3 .12 0 .8.01 1.1.78.28.7.99 2.5.99 2.5s.6 1.1 1.7 1.1c2.4 0 4-2.8 4-6.1 0-2.5-1.7-4.4-4.7-4.4-3.5 0-5.6 2.6-5.6 5.6 0 1 .4 2.1.9 2.7.1.1.1.2.1.4-.1.4-.3 1.3-.34 1.5-.05.2-.2.3-.4.2-1.5-.6-2.2-2.2-2.2-3.9 0-2.9 2.5-6.4 7.3-6.4 3.9 0 6.5 2.8 6.5 5.8 0 4-2.2 6.9-5.5 6.9-1.1 0-2.1-.6-2.5-1.3l-.7 2.8c-.2 1-.8 2.2-1.2 2.9 1 .3 2 .5 3.1.5 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4.5 4.5l5.9 7.9L4.5 19.5" />
                  <path d="M9.5 12.5l5.5-8" />
                  <path d="M14.5 12.5l5.5 7" />
                  <path d="M9.5 4.5l5.5 8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h4 className="text-white text-sm tracking-wider uppercase mb-4 font-medium">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="text-xs text-white/40 tracking-wider uppercase px-2 py-1 border border-white/10 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

