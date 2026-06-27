import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Gift Sets', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Care Guide', to: '/care' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Careers', to: '/careers' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-warm-charcoal border-t border-warm-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-warm-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warm-tan leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-warm-sand hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-warm-cream mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-warm-tan hover:text-gold transition-colors duration-300"
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
        <div className="mt-16 pt-8 border-t border-warm-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-brown">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-warm-brown">Visa</span>
            <span className="text-xs text-warm-brown">Mastercard</span>
            <span className="text-xs text-warm-brown">Amex</span>
            <span className="text-xs text-warm-brown">PayPal</span>
            <span className="text-xs text-warm-brown">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
