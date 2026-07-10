import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const COLS = [
  {
    title: "Shop",
    items: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Sets & Gifts", to: "/shop?category=sets" },
      { label: "New Arrivals", to: "/shop" },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact Us", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Stockists", to: "#" },
    ],
  },
];

const PAYMENT = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Klarna"];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-textondark">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-widest3 font-light text-textondark">
              VELMORA
            </Link>
            <p className="mt-6 text-sm text-textmuteondark leading-relaxed max-w-sm">
              Demi-fine jewelry, made slowly and meant to be kept. Hand-finished
              in 18K gold plate, designed to outlast the moment you bought it for.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-textmuteondark hover:text-champagne-300 editorial-transition">
                <Instagram size={18} strokeWidth={1.4} />
              </a>
              <a href="#" aria-label="Facebook" className="text-textmuteondark hover:text-champagne-300 editorial-transition">
                <Facebook size={18} strokeWidth={1.4} />
              </a>
              <a href="#" aria-label="YouTube" className="text-textmuteondark hover:text-champagne-300 editorial-transition">
                <Youtube size={18} strokeWidth={1.4} />
              </a>
              <a href="mailto:hello@velmora.com" aria-label="Email us" className="text-textmuteondark hover:text-champagne-300 editorial-transition">
                <Mail size={18} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="label-cap text-champagne-300">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to={it.to}
                        className="text-sm text-textondark/85 hover:text-champagne-300 editorial-transition"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline-dark mt-16 mb-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-textmuteondark tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENT.map((p) => (
              <span
                key={p}
                className="label-cap text-[10px] text-textmuteondark border border-ink-700 px-3 py-1.5"
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
