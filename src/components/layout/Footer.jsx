import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Size Guide', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Contact Us', to: '#' },
    { label: 'Track Order', to: '#' },
  ],
  company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
    { label: 'Careers', to: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide font-light text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman who values quality and elegance.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-ivory/50 hover:text-gold transition-colors text-xs tracking-wider uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-mega-wide uppercase text-ivory/40 mb-5 font-sans font-medium">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Payment icons */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span
                key={method}
                className="text-[10px] text-ivory/30 tracking-wider uppercase font-medium"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
