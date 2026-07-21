import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, CreditCard } from "lucide-react";

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
      { label: "Shipping & Returns", to: "/journal" },
      { label: "Care Guide", to: "/journal" },
      { label: "Size Guide", to: "/journal" },
      { label: "Contact Us", to: "/about" },
      { label: "FAQ", to: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Collections", to: "/collections" },
      { label: "Sustainability", to: "/about" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-3xl font-semibold uppercase tracking-[0.35em]">
              Velmora
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
              Demi-fine jewelry crafted to be treasured. 18k gold-plated pieces,
              designed in our atelier and made for everyday rituals and once-in-a-
              lifetime moments alike.
            </p>
            <div className="mt-7 flex items-center gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center border border-line-dark text-ivory/70 transition-all duration-300 hover:border-gold-soft hover:text-gold-soft"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-soft">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-line-dark pt-8 md:flex-row">
          <p className="text-xs text-ivory/40 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <CreditCard size={16} className="text-ivory/40" />
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="border border-line-dark px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ivory/50"
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
