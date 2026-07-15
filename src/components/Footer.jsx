import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Send } from "lucide-react";
import { CATEGORIES } from "@/lib/products";

const FOOTER_COLS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?collection=earrings" },
      { label: "Necklaces", to: "/shop?collection=necklaces" },
      { label: "Huggies", to: "/shop?collection=huggies" },
      { label: "Gift Sets", to: "/shop?collection=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "#" },
      { label: "Journal", to: "#" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Stockists", to: "#" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"];

export default function Footer() {
  return (
    <footer className="bg-cocoa text-ivory/85">
      <div className="container-shell py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-ivory tracking-[0.32em] text-[20px]"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70 max-w-xs">
              Demi-fine gold jewelry, cast in small batches and finished by hand.
              Designed to be worn — and treasured — for years.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-ivory/20 rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="p-2 border border-ivory/20 rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <Send size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[12px] uppercase tracking-[0.22em] text-ivory">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[12px] uppercase tracking-[0.22em] text-ivory">
              Follow
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>@velmora.fine</li>
              <li>#velmoraedit</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border border-ivory/20 rounded-sm text-ivory/70"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-ivory/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
