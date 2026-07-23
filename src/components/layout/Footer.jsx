import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const cols = [
  {
    heading: "Shop",
    links: [
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop", label: "All Pieces" },
      { to: "/shop?sort=new", label: "New Arrivals" },
    ],
  },
  {
    heading: "Help",
    links: [
      { to: "#", label: "Contact Us" },
      { to: "#", label: "Shipping" },
      { to: "#", label: "Returns & Exchanges" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Size Guide" },
    ],
  },
  {
    heading: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Press" },
      { to: "#", label: "Careers" },
    ],
  },
];

const PaymentBadge = ({ children }) => (
  <div className="inline-flex items-center justify-center h-6 px-2.5 border border-cream-200 text-cream-200 text-[10px] tracking-btn uppercase font-medium">
    {children}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream-200">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="inline-block font-serif text-[24px] tracking-nav uppercase text-cream-50"
            >
              Velmora
            </Link>
            <p className="mt-5 font-serif text-[20px] md:text-[22px] leading-snug text-cream-100 max-w-sm">
              Quietly considered demi-fine jewelry, made for the everyday —
              and the people we love.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 inline-flex items-center justify-center border border-cream-200 text-cream-200 hover:bg-cream-50 hover:text-cocoa-900 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email us"
                className="w-9 h-9 inline-flex items-center justify-center border border-cream-200 text-cream-200 hover:bg-cream-50 hover:text-cocoa-900 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <p className="eyebrow-light mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream-100 hover:text-gold-500 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter (footer) */}
          <div className="md:col-span-2">
            <p className="eyebrow-light mb-5">Stay in touch</p>
            <p className="text-sm text-cream-100/80 leading-relaxed mb-4">
              New drops, journal entries, and the occasional 10% off.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-0 border-b border-cream-200 text-cream-50 placeholder:text-cream-200/50 py-2 text-sm focus:outline-none focus:border-gold-500 transition-colors duration-300"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="self-start text-[11px] font-medium uppercase tracking-btn text-gold-500 hover:text-gold-300 transition-colors duration-300"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cocoa-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[12px] text-cream-200/70">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentBadge>Visa</PaymentBadge>
            <PaymentBadge>Mastercard</PaymentBadge>
            <PaymentBadge>Amex</PaymentBadge>
            <PaymentBadge>PayPal</PaymentBadge>
            <PaymentBadge>Apple Pay</PaymentBadge>
            <PaymentBadge>Shop Pay</PaymentBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}
