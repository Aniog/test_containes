import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { to: '/shop?cat=earrings', label: 'Earrings' },
      { to: '/shop?cat=necklaces', label: 'Necklaces' },
      { to: '/shop?cat=huggies', label: 'Huggies' },
      { to: '/shop', label: 'All Jewelry' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/shipping', label: 'Shipping & Returns' },
      { to: '/care', label: 'Materials & Care' },
      { to: '/sizing', label: 'Sizing Guide' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/press', label: 'Press' },
    ],
  },
];

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 md:px-10 md:pt-24">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-3xl tracking-[0.32em]">
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Quietly crafted demi-fine jewelry, designed in small batches and
              built to be worn — and treasured — every day.
            </p>
            <div className="mt-8 flex items-center gap-5 text-cream/70">
              <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-champagne transition-colors">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-champagne">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-cream/70">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-champagne transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-champagne">
              Stay close
            </h4>
            <p className="mt-5 text-sm text-cream/70">
              New arrivals, private editorials, the occasional letter.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-5 flex items-center border-b border-cream/30 pb-2 focus-within:border-champagne"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-3 text-[11px] uppercase tracking-[0.28em] text-champagne hover:text-cream"
              >
                Join
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-champagne">
                Thank you — see you in your inbox.
              </p>
            )}
          </div>
        </div>

        <hr className="my-12 border-cream/15" />

        <div className="flex flex-col items-start justify-between gap-6 text-[11px] uppercase tracking-[0.28em] text-cream/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
            <span>PayPal</span>
            <span>Klarna</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
