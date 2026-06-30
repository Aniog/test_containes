import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=gifts", label: "Gifts" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help#shipping", label: "Shipping & Returns" },
      { to: "/help#care", label: "Care Guide" },
      { to: "/help#size", label: "Size Guide" },
      { to: "/help#contact", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/help#sustainability", label: "Sustainability" },
      { to: "/journal", label: "Press" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/80 mt-24">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-display text-3xl tracking-[0.18em] text-ivory">VELMORA</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              Demi-fine jewelry, crafted to be treasured. Designed in-house, made for every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Velmora on Instagram"
                className="p-2 -ml-2 hover:text-gold transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@velmora.co"
                aria-label="Email Velmora"
                className="p-2 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="label-eyebrow text-ivory/50">{col.title}</div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-ivory/80 hover:text-gold transition-colors"
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

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 border border-ivory/15 rounded text-[10px] tracking-widest text-ivory/70"
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
