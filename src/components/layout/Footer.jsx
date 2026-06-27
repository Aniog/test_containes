import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Send } from 'lucide-react';

const FOOTER_COLS = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
      { label: 'Best Sellers', to: '/shop?sort=bestsellers' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/help/shipping' },
      { label: 'Materials & Care', to: '/help/care' },
      { label: 'Size Guide', to: '/help/size' },
      { label: 'Contact', to: '/help/contact' },
      { label: 'FAQs', to: '/help/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/careers' },
    ],
  },
];

const PAYMENTS = [
  { id: 'visa', label: 'Visa' },
  { id: 'mastercard', label: 'Mastercard' },
  { id: 'amex', label: 'Amex' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'applepay', label: 'Apple Pay' },
  { id: 'shop', label: 'Shop Pay' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-32 md:mt-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-10">
        {/* Top — logo + tagline + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 pb-16">
          {/* Brand block */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link to="/" className="font-serif tracking-[0.32em] text-[1.4rem] text-cream">
              VELMORA
            </Link>
            <p className="editorial text-cream/70 mt-6 max-w-md text-lg leading-relaxed">
              Demi-fine 18K gold plated jewelry, quietly crafted.
              Made to live in — and to last.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.25} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <Facebook className="w-[18px] h-[18px]" strokeWidth={1.25} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <Send className="w-[18px] h-[18px]" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <p className="label-light text-cream/60 mb-5">{col.title}</p>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-cream/85 hover:text-cream transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hairline */}
        <div className="h-px bg-cream/15" />

        {/* Bottom — payments + copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p.id}
                className="inline-flex items-center justify-center min-w-[46px] h-7 px-2.5 border border-cream/25 text-[10px] tracking-[0.12em] text-cream/75 uppercase"
              >
                {p.label}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-xs text-cream/55">
            <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-cream transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-cream transition-colors">Terms</Link>
              <Link to="/accessibility" className="hover:text-cream transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}