import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-ink">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink/60 leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="text-ink/50 hover:text-gold-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-ink/50 hover:text-gold-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-ink/50 hover:text-gold-600 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/50">
              Shop
            </h4>
            <ul className="mt-4 space-y-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Sets', 'New Arrivals', 'Bestsellers'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/shop?category=${item.toLowerCase()}`}
                      className="text-sm text-ink/70 hover:text-gold-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/50">
              Help
            </h4>
            <ul className="mt-4 space-y-2.5">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ', 'Track Order'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-ink/70 hover:text-gold-600 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-ink/50">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-ink/70 hover:text-gold-600 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-base-200 pt-8 md:flex-row">
          <p className="text-xs text-ink/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ink/40">We accept</span>
            <div className="flex gap-2 text-ink/40">
              <span className="text-xs font-medium">VISA</span>
              <span className="text-xs font-medium">MC</span>
              <span className="text-xs font-medium">AMEX</span>
              <span className="text-xs font-medium">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
