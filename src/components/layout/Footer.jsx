import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gifts", to: "/shop?category=sets" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "Contact", to: "/help/contact" },
      { label: "FAQs", to: "/help/faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Materials", to: "/about#materials" },
      { label: "Sustainability", to: "/about#sustainability" },
      { label: "Press", to: "/about#press" },
      { label: "Journal", to: "/journal" },
    ],
  },
];

const PaymentBadge = ({ children, label }) => (
  <span
    aria-label={label}
    className="inline-flex items-center justify-center h-7 px-2.5 border border-hairline text-[10px] uppercase tracking-widest2 text-taupe-500 font-sans bg-ivory-50"
  >
    {children}
  </span>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso text-ivory-100">
      <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif tracking-widest3 text-2xl text-ivory-50"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-sm text-ivory-100/70 max-w-xs leading-relaxed">
              Quietly crafted demi-fine jewelry. Designed in small batches in
              our Brooklyn studio, made to be worn — and treasured — for years.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-ivory-100/70 hover:text-gold-300 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-ivory-100/70 hover:text-gold-300 transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-ivory-100/70 hover:text-gold-300 transition-colors"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-ivory-50/90 font-medium">
                {col.heading}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory-100/70 hover:text-gold-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-ivory-50/90 font-medium">
              Stay close
            </h4>
            <p className="mt-5 text-sm text-ivory-100/70 leading-relaxed">
              New drops, occasional notes. Never spam.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory-100/10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-ivory-100/50 tracking-wide">
            © {year} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentBadge label="Visa">Visa</PaymentBadge>
            <PaymentBadge label="Mastercard">Mastercard</PaymentBadge>
            <PaymentBadge label="American Express">Amex</PaymentBadge>
            <PaymentBadge label="Apple Pay">Apple Pay</PaymentBadge>
            <PaymentBadge label="PayPal">PayPal</PaymentBadge>
            <PaymentBadge label="Shop Pay">Shop Pay</PaymentBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}
