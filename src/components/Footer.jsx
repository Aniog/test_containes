import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { name: 'Earrings', path: '/shop?category=earrings' },
  { name: 'Necklaces', path: '/shop?category=necklaces' },
  { name: 'Huggies', path: '/shop?category=huggies' },
  { name: 'Gift Sets', path: '/shop' },
  { name: 'New Arrivals', path: '/shop' },
];

const helpLinks = [
  { name: 'Shipping & Returns', path: '/shipping' },
  { name: 'Size Guide', path: '/size-guide' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Track Order', path: '/track' },
];

const companyLinks = [
  { name: 'Our Story', path: '/about' },
  { name: 'Journal', path: '/journal' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Careers', path: '/careers' },
  { name: 'Press', path: '/press' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-cream mb-3">
            Join for 10% off your first order
          </h3>
          <p className="font-sans text-sm text-cream/60 mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-cream placeholder-cream/40 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-white font-sans text-xs tracking-wider uppercase hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-cream block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-cream/50 leading-relaxed mb-6">
              Fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for the modern woman.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest-plus uppercase text-cream/80 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-cream/40 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest-plus uppercase text-cream/80 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-cream/40 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest-plus uppercase text-cream/80 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-cream/40 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-cream/30">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {/* Payment icons */}
              <div className="flex items-center gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((icon) => (
                  <div
                    key={icon}
                    className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                  >
                    <span className="text-[9px] font-sans text-cream/40 font-medium">
                      {icon.slice(0, 4)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
