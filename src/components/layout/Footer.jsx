import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop/earrings" },
      { label: "Necklaces", to: "/shop/necklaces" },
      { label: "Huggies", to: "/shop/huggies" },
      { label: "Gift Sets", to: "/shop?category=gift" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "Contact", to: "/help/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#craft" },
      { label: "Press", to: "/about#press" },
      { label: "Careers", to: "/about#careers" },
    ],
  },
];

function PaymentIcon({ children, label }) {
  return (
    <span
      title={label}
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-6 border border-hairline-dark text-[9px] tracking-editorial font-sans font-medium text-bone/80"
    >
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] font-medium"
            >
              VELMORA
            </Link>
            <p className="mt-6 text-muted-dark text-sm leading-relaxed max-w-sm font-sans">
              Demi-fine jewelry, made to be worn. Hand-finished pieces in
              warm gold tones, designed in studio and crafted to last.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-bone/80 hover:text-gold-soft transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-bone/80 hover:text-gold-soft transition-colors"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-bone/80 hover:text-gold-soft transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-bone/80 hover:text-gold-soft transition-colors"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="font-sans text-sm text-bone/80 hover:text-gold-soft transition-colors"
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

        <div className="mt-16 pt-8 border-t border-hairline-dark flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-sans text-[11px] uppercase tracking-editorial text-muted-dark">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="PayPal">PAYPAL</PaymentIcon>
            <PaymentIcon label="Apple Pay">APAY</PaymentIcon>
            <PaymentIcon label="Google Pay">GPAY</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
