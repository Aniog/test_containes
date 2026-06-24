import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Music2 } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?cat=Earrings" },
      { label: "Necklaces", to: "/shop?cat=Necklaces" },
      { label: "Huggies", to: "/shop?cat=Huggies" },
      { label: "Gift Sets", to: "/shop?cat=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns", to: "#" },
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

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">
          <div className="md:col-span-1">
            <div className="font-serif text-3xl tracking-[0.35em] font-light">
              VELMORA
            </div>
            <p className="mt-6 text-sm leading-relaxed text-bone/70 max-w-xs">
              Demi-fine jewelry crafted in small batches. Designed to be worn
              every day, treasured for many.
            </p>
            <div className="mt-8 flex items-center gap-5 text-bone/80">
              <a aria-label="Instagram" href="#" className="hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a aria-label="TikTok" href="#" className="hover:text-gold transition-colors">
                <Music2 size={18} />
              </a>
              <a aria-label="Facebook" href="#" className="hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] tracking-[0.25em] uppercase text-bone/60 font-medium">
                {col.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/85 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-hairline-dark flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-bone/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-bone/70">
            {/* Payment marks (text-only, brand-safe) */}
            {["VISA", "MASTERCARD", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.2em] border border-hairline-dark px-2 py-1"
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
