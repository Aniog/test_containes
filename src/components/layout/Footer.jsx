import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, Facebook, Instagram, Youtube } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Delivery", to: "/journal" },
      { label: "Returns & Exchanges", to: "/journal" },
      { label: "Care Guide", to: "/journal" },
      { label: "Size Guide", to: "/journal" },
      { label: "Contact Us", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Collections", to: "/collections" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/journal" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "YouTube", icon: Youtube },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-serif text-3xl font-semibold tracking-[0.28em] text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs font-serif text-lg italic leading-relaxed text-cream/70">
              Demi-fine jewelry, crafted to be treasured — everyday heirlooms in
              warm 18K gold.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold">
                {col.title}
              </h3>
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
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <CreditCard className="mr-1 h-4 w-4 text-cream/40" />
            {PAYMENTS.map((name) => (
              <span
                key={name}
                className="border border-cream/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cream/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
