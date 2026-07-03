import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, accessible luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold mb-4 text-brand-gold-light">
              Shop
            </h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-brand-muted-light hover:text-white transition-colors duration-300 font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold mb-4 text-brand-gold-light">
              Help
            </h4>
            <ul className="space-y-2">
              {['Shipping & Returns', 'FAQ', 'Size Guide', 'Contact Us', 'Care Instructions'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-muted-light hover:text-white transition-colors duration-300 font-sans"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold mb-4 text-brand-gold-light">
              Company
            </h4>
            <ul className="space-y-2">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-muted-light hover:text-white transition-colors duration-300 font-sans"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-espresso-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-muted-light font-sans">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Payment icons placeholder */}
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <span
                  key={card}
                  className="text-[10px] text-brand-muted-light border border-brand-espresso-light rounded px-2 py-0.5 font-sans"
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
};

export default Footer;
