import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

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
      { label: "Contact", to: "#" },
      { label: "Shipping", to: "#" },
      { label: "Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/#about" },
      { label: "Journal", to: "/#journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-12">
          <div className="col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.28em] uppercase font-light"
            >
              Velmora
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              Demi-fine jewelry made to be worn, layered, gifted, kept. 18K
              gold-plated, hypoallergenic, built to outlast the trend cycle.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-cream/20 p-2.5 text-cream/80 transition-colors hover:border-gold hover:text-gold-light"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-cream/20 p-2.5 text-cream/80 transition-colors hover:border-gold hover:text-gold-light"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-full border border-cream/20 p-2.5 text-cream/80 transition-colors hover:border-gold hover:text-gold-light"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold-light">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/75 transition-colors hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-hairline-ink pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cream/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream/55">
            <span className="rounded border border-cream/20 px-2.5 py-1 tracking-wider">VISA</span>
            <span className="rounded border border-cream/20 px-2.5 py-1 tracking-wider">MC</span>
            <span className="rounded border border-cream/20 px-2.5 py-1 tracking-wider">AMEX</span>
            <span className="rounded border border-cream/20 px-2.5 py-1 tracking-wider">PAYPAL</span>
            <span className="rounded border border-cream/20 px-2.5 py-1 tracking-wider">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
