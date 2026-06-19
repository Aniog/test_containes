import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-brand-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light leading-relaxed font-sans">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, accessible luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-cream mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-gold transition-colors font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-cream mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-cream mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-muted-light hover:text-brand-gold transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-brand-espresso-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-muted font-sans">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {/* Payment icons as text badges */}
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="text-[10px] tracking-wide uppercase text-brand-muted font-sans border border-brand-espresso-light rounded px-2 py-0.5"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
