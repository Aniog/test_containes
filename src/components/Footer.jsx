import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?cat=earrings" },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies", to: "/shop?cat=huggies" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/shop" },
      { label: "Care Guide", to: "/shop" },
      { label: "Size Guide", to: "/shop" },
      { label: "Contact Us", to: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/#story" },
      { label: "Journal", to: "/#journal" },
      { label: "Sustainability", to: "/shop" },
      { label: "Stockists", to: "/shop" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-medium uppercase tracking-[0.3em]">Velmora</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine jewelry in 18k gold, made slowly and honestly — to be worn daily and treasured for years.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith("/#") ? (
                      <a href={link.to} className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to} className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-cream/15 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-sm border border-cream/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream/60"
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
