import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const SHOP_LINKS = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
];

const HELP_LINKS = ['Shipping & Delivery', 'Returns & Exchanges', 'Care Guide', 'Size Guide', 'Contact Us'];

const COMPANY_LINKS = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Collections', to: '/collections' },
  { label: 'Sustainability', to: '/about' },
  { label: 'Stockists', to: '/about' },
];

const PAYMENTS = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY', 'G PAY'];

function PinterestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 20.5 12 9m0 0c-.6 2.7-2.6 3-3.4 1.6C7.6 8.9 9.6 6 12.6 6c2.4 0 3.9 1.5 3.9 3.6 0 2.6-1.6 4.9-3.9 4.9-1 0-1.8-.5-2-1.3" />
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M14.5 4v9.8a3.6 3.6 0 1 1-3.6-3.6" />
      <path d="M14.5 6.5c.8 1.9 2.3 3.1 4.5 3.3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.35em] text-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Demi-fine gold jewelry, designed in Lisbon and crafted to be treasured — every day,
              for years.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: PinterestIcon, label: 'Pinterest' },
                { Icon: TikTokIcon, label: 'TikTok' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Shop">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Shop</h3>
            <ul className="mt-5 space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Help">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Help</h3>
            <ul className="mt-5 space-y-3">
              {HELP_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Company</h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-ivory/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-wide text-ivory/50">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2" aria-label="Accepted payment methods">
            {PAYMENTS.map((name) => (
              <span
                key={name}
                className="flex h-7 items-center rounded-sm border border-ivory/20 px-2.5 text-[9px] font-bold tracking-[0.12em] text-ivory/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
