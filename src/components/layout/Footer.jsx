import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gifts", to: "/shop?category=gifts" },
      { label: "New Arrivals", to: "/shop?sort=newest" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Shipping & Returns", to: "/#shipping" },
      { label: "Care Guide", to: "/#care" },
      { label: "Size Guide", to: "/#size" },
      { label: "Contact", to: "/#contact" },
      { label: "FAQ", to: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", to: "/#about" },
      { label: "Journal", to: "/#journal" },
      { label: "Sustainability", to: "/#about" },
      { label: "Press", to: "/#about" },
      { label: "Careers", to: "/#about" },
    ],
  },
];

const SOCIAL = [
  { label: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { label: "TikTok", Icon: TikTokMark, href: "https://tiktok.com" },
  { label: "Pinterest", Icon: PinterestMark, href: "https://pinterest.com" },
  { label: "Email", Icon: Mail, href: "mailto:hello@velmora.com" },
];

function TikTokMark({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4c.5 2.5 2.5 4 5 4" />
    </svg>
  );
}

function PinterestMark({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M11 8c2.5 0 4 1.5 4 3.5S13.5 15 12 15c-1 0-1.7-.4-2-.9" />
      <path d="M11 8l-1 13" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10 pt-20 md:pt-24 pb-10">
        {/* Top: wordmark + tagline + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-14 lg:gap-20 pb-14 border-b border-hairline-dark">
          <div>
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.32em] text-ivory block"
            >
              VELMORA
            </Link>
            <p className="mt-5 font-serif text-[1.0625rem] italic text-ivory/75 max-w-[40ch] leading-[1.7]">
              Crafted demi-fine jewelry, designed in small batches and made to be treasured.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {SOCIAL.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-hairline-dark flex items-center justify-center hover:border-ivory/60 transition-colors"
                >
                  <Icon className="w-4 h-4 text-ivory/80" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-gold-light/80 mb-5">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="font-serif text-[1.0625rem] text-ivory/80 hover:text-ivory transition-colors"
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

        {/* Payment row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-hairline-dark">
          <p className="eyebrow text-ivory/55">Secure payments</p>
          <div className="flex items-center gap-3">
            <PaymentBadge label="Visa" />
            <PaymentBadge label="MC" sub="Mastercard" />
            <PaymentBadge label="Amex" />
            <PaymentBadge label="PayPal" />
            <PaymentBadge label="Apple Pay" />
            <PaymentBadge label="Shop Pay" />
          </div>
        </div>

        {/* Legal row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/55">
          <p className="font-sans">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/#privacy" className="hover:text-ivory transition-colors uppercase tracking-[0.18em]">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/#terms" className="hover:text-ivory transition-colors uppercase tracking-[0.18em]">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/#accessibility" className="hover:text-ivory transition-colors uppercase tracking-[0.18em]">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function PaymentBadge({ label, sub }) {
  return (
    <div
      className="h-7 min-w-[42px] px-2 rounded-[3px] border border-ivory/30 flex items-center justify-center text-[10px] tracking-[0.08em] text-ivory/85 font-medium bg-ivory/5"
      aria-label={`Accepted: ${label}`}
      title={label}
    >
      <span className="font-serif italic">{label}</span>
      {sub && <span className="ml-1 text-ivory/60 text-[8px] uppercase tracking-[0.12em]">{sub}</span>}
    </div>
  );
}