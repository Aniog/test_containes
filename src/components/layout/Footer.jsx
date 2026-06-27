import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Gift Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/shipping', label: 'Shipping' },
      { to: '/returns', label: 'Returns' },
      { to: '/care', label: 'Jewelry Care' },
      { to: '/contact', label: 'Contact' },
      { to: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/press', label: 'Press' },
      { to: '/careers', label: 'Careers' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.25em] font-medium"
            >
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              Demi-fine jewelry, made to be worn every day and kept forever.
              Designed in New York. Crafted with care.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-ivory/20 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 border border-ivory/20 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-2 border border-ivory/20 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.28em] font-medium text-ivory mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.28em] font-medium text-ivory mb-5">
              Pay with
            </h4>
            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-ivory/60">
              <span className="px-2 py-1 border border-ivory/20">Visa</span>
              <span className="px-2 py-1 border border-ivory/20">MC</span>
              <span className="px-2 py-1 border border-ivory/20">Amex</span>
              <span className="px-2 py-1 border border-ivory/20">PayPal</span>
              <span className="px-2 py-1 border border-ivory/20">ApplePay</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
