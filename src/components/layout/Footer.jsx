import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, CreditCard } from "lucide-react";

const COLS = [
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
      { label: "Shipping & Delivery", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Care Guide", to: "/about" },
      { label: "Contact Us", to: "/about" },
      { label: "FAQ", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Collections", to: "/collections" },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-[0.28em] text-cream"
            >
              VELMORA
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-goldSoft/80">
              Demi-fine jewelry crafted to be treasured. 18k gold plating,
              hypoallergenic, and made to be worn every day.
            </p>
            <div className="mt-2 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-overline text-goldSoft">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/70 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <CreditCard size={16} className="text-cream/40" />
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-sm border border-cream/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream/60"
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
