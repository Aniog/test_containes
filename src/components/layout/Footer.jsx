import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Shop',
      links: [
        { label: 'All Jewelry', to: '/shop' },
        { label: 'Earrings', to: '/shop?category=earrings' },
        { label: 'Necklaces', to: '/shop?category=necklaces' },
        { label: 'Huggies', to: '/shop?category=huggies' },
        { label: 'Gift Sets', to: '/shop?category=sets' },
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
        { label: 'Stockists', to: '/stockists' },
      ],
    },
  ];

  return (
    <footer className="bg-deep-900 text-deep-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest2 font-semibold text-cream">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-deep-400 leading-relaxed max-w-xs">
              Demi-fine jewelry for the modern woman. Gold-plated pieces designed to be treasured, every day.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-deep-400 hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-deep-400 hover:text-cream transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-deep-400 hover:text-cream transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase font-medium text-cream mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-deep-400 hover:text-cream transition-colors"
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
        <div className="mt-14 pt-8 border-t border-deep-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-deep-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-deep-500">
            <CreditCard className="w-4 h-4" />
            <span className="text-xs ml-2">Visa · Mastercard · Amex · PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
