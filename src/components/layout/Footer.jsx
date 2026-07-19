import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-widest text-white"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in-house, made to last.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-white/60 hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/80 mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-white/50 hover:text-velmora-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/80 mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-velmora-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/80 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-velmora-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-[10px] text-white/40 border border-white/20 px-2 py-1 rounded-sm"
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
