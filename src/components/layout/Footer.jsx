import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
      { label: 'Bestsellers', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/about' },
      { label: 'Materials & Care', to: '/about' },
      { label: 'Size Guide', to: '/about' },
      { label: 'Contact Us', to: '/about' },
      { label: 'FAQ', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
];

const PAYMENTS = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-3xl tracking-[0.35em] text-cream">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              Demi-fine jewelry in 18k gold, crafted to be treasured and designed
              to be lived in. Hypoallergenic, nickel-free, and made to move with you.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-cream/70 transition-colors hover:text-gold">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 transition-colors hover:text-gold">
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 transition-colors hover:text-gold">
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-10 border-cream/10" />

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <CreditCard className="h-4 w-4 text-cream/40" strokeWidth={1.5} />
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="border border-cream/15 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-cream/60"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
