import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Send } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
      { label: "All Jewelry", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Sizing", to: "#" },
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
      { label: "Stockists", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand block */}
        <div className="md:col-span-4 space-y-5">
          <Link to="/" className="font-serif text-3xl tracking-wider2 leading-none">
            VELMORA
          </Link>
          <p className="text-sm text-ivory/70 max-w-xs leading-relaxed">
            Demi-fine gold jewelry, crafted in small batches. Made to be worn often, kept always.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" aria-label="Instagram" className="hover:text-goldSoft transition">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-goldSoft transition">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Email" className="hover:text-goldSoft transition">
              <Send size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-base mb-4 text-goldSoft">{col.title}</h4>
              <ul className="space-y-2.5 text-sm text-ivory/70">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="hover:text-ivory transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3" aria-label="Accepted payment methods">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 border border-ivory/15 tracking-editorial text-[10px]"
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
