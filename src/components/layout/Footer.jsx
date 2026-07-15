import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns & Exchanges", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
    ],
  },
];

const PAYMENT = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Apple Pay",
  "Shop Pay",
];

export default function Footer() {
  return (
    <footer className="bg-sable text-ivory/85 mt-24">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.22em] text-ivory">
                VELMORA
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65 font-sans">
              Quiet, considered demi-fine jewelry. 18K gold plated, hypoallergenic,
              and made to be lived in — and passed down.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-ivory/15 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 border border-ivory/15 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-2 border border-ivory/15 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-sans text-[11px] tracking-widest2 uppercase text-ivory/55">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-gold-light transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-1">
            <h4 className="font-sans text-[11px] tracking-widest2 uppercase text-ivory/55">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>hello@velmora.co</li>
              <li>Mon — Fri, 9–5 PST</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14 bg-ivory/10" />

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-ivory/55 font-sans">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENT.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 border border-ivory/15 rounded text-[10px] tracking-widest2 uppercase"
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
