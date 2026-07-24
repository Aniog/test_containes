import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, Facebook, Instagram, Youtube } from "lucide-react";

const columns = [
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
      { label: "Sustainability", to: "/about" },
      { label: "Accessibility", to: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl font-medium tracking-[0.3em] text-ivory">
              VELMORA
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-dark">
              Demi-fine jewelry in warm 18k gold, designed in small batches and
              crafted to be treasured for years — not seasons.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-muted-dark transition-colors hover:text-gold-soft">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-dark transition-colors hover:text-gold-soft">
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-dark transition-colors hover:text-gold-soft">
                <Youtube className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold-soft">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 transition-colors duration-300 hover:text-gold-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-line-dark pt-7 md:flex-row">
          <p className="text-xs text-muted-dark">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-muted-dark">
            <span className="text-[10px] uppercase tracking-[0.2em]">We accept</span>
            <CreditCard className="h-5 w-5" strokeWidth={1.5} />
            <span className="border border-line-dark px-2 py-0.5 text-[10px] font-semibold tracking-wider">VISA</span>
            <span className="border border-line-dark px-2 py-0.5 text-[10px] font-semibold tracking-wider">AMEX</span>
            <span className="border border-line-dark px-2 py-0.5 text-[10px] font-semibold tracking-wider">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
