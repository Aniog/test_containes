import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-wider2">VELMORA</div>
            <p className="mt-5 text-sm text-cream/70 max-w-sm leading-relaxed">
              Demi-fine jewelry, made to be treasured. 18k gold plated, hypoallergenic,
              and quietly considered — for everyday and the days that matter.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-champagne transition-colors">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div className="md:col-span-2" key={col.heading}>
              <h4 className="font-sans uppercase tracking-widest2 text-[11px] text-cream/50 mb-5">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/85 hover:text-champagne transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-sans uppercase tracking-widest2 text-[11px] text-cream/50 mb-5">
              Stockists
            </h4>
            <p className="text-sm text-cream/85 leading-relaxed">
              New York · Paris<br />London · Tokyo
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center justify-center px-3 py-1.5 border border-cream/20 text-[10px] uppercase tracking-widest2 text-cream/70"
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
