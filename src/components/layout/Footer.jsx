import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Edit", to: "/shop?category=earrings" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/help/shipping" },
      { label: "Returns", to: "/help/returns" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Contact", to: "/help/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/about" },
    ],
  },
];

const paymentIcons = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-wide py-20">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-widest2">
              VELMORA
            </Link>
            <p className="mt-5 text-sm text-ivory/60 max-w-xs leading-relaxed font-light">
              Demi-fine jewelry, finished in 18K gold. Designed to be worn,
              treasured, and remembered.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 md:col-start-auto">
              <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-ivory/50 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-gold transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-ivory/50 mb-5">
              Connect
            </h4>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              hello@velmora.com
              <br />
              <span className="text-ivory/50">By appointment only</span>
            </p>
          </div>
        </div>

        {/* Hairline */}
        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-ivory/50 tracking-wider">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {paymentIcons.map((p) => (
              <span
                key={p}
                className="text-[10px] uppercase tracking-widest2 px-3 py-1.5 border border-ivory/20 text-ivory/60"
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
