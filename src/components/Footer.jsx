import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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
      { label: "Shipping & Delivery", to: "/shop" },
      { label: "Returns & Exchanges", to: "/shop" },
      { label: "Jewelry Care", to: "/shop" },
      { label: "Size Guide", to: "/shop" },
      { label: "Contact Us", to: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/#story" },
      { label: "Sustainability", to: "/#story" },
      { label: "Journal", to: "/#journal" },
      { label: "Careers", to: "/#story" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "G PAY"];

const SOCIALS = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "Twitter", Icon: Twitter },
  { label: "YouTube", Icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-medium uppercase tracking-[0.28em] text-cream"
            >
              Velmora
            </Link>
            <p className="mt-5 max-w-xs font-serif text-lg italic leading-relaxed text-cream/70">
              Demi-fine jewelry, crafted to be treasured — everyday heirlooms in 18K gold.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-cream/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="flex h-7 items-center rounded-sm border border-cream/20 px-2.5 text-[9px] font-semibold tracking-widest text-cream/60"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
