import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', path: '/shop?category=Earrings' },
      { label: 'Necklaces', path: '/shop?category=Necklaces' },
      { label: 'Huggies', path: '/shop?category=Huggies' },
      { label: 'Gift Sets', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Size Guide', path: '/size-guide' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
];

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream" role="contentinfo">
      <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide-product text-velmora-cream" aria-label="Velmora Fine Jewelry home">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-warm-gray font-sans leading-relaxed">
              Demi-fine jewelry crafted with intention. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-warm-gray hover:text-velmora-gold transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-warm-gray hover:text-velmora-gold transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-warm-gray hover:text-velmora-gold transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-xs font-semibold tracking-product uppercase text-velmora-gold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3" role="list">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-warm-gray hover:text-velmora-cream transition-colors font-sans"
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
        <div className="mt-16 pt-8 border-t border-stone-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velmora-warm-gray font-sans">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4" aria-label="Accepted payment methods">
              {paymentMethods.map(method => (
                <span
                  key={method}
                  className="flex items-center gap-1 text-xs text-velmora-warm-gray font-sans border border-stone-700 px-2 py-1"
                >
                  <CreditCard className="w-3 h-3" aria-hidden="true" />
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
