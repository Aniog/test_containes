import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-onyx text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-ultra-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted font-light leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-super-wide uppercase mb-5 text-brand-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-brand-muted hover:text-white transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-super-wide uppercase mb-5 text-brand-gold">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'FAQ', 'Size Guide', 'Contact Us', 'Track Order'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-brand-muted hover:text-white transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-super-wide uppercase mb-5 text-brand-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-brand-muted hover:text-white transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted font-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
              <span
                key={card}
                className="text-[10px] font-sans font-medium tracking-wide uppercase text-brand-muted border border-white/10 px-2 py-1"
              >
                {card}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
