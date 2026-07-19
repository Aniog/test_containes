import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'Contact Us', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Press', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                Join for 10% off
              </h3>
              <p className="text-white/60 text-sm">
                Be the first to know about new collections and exclusive offers.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-gold text-white text-sm font-medium uppercase tracking-widest-plus hover:bg-brand-gold-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-medium tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium uppercase tracking-widest-plus mb-5 text-white/80">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/50 hover:text-brand-gold transition-colors duration-300"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((card) => (
                <span
                  key={card}
                  className="px-2 py-1 bg-white/10 text-white/50 text-[10px] font-medium rounded"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
