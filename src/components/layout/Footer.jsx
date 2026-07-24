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
      { label: "Contact Us", to: "/help" },
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Press", to: "/press" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

function PaymentIcon({ label }) {
  return (
    <div className="h-7 px-2.5 min-w-[42px] flex items-center justify-center rounded-sm border border-bone/20 text-[10px] font-medium tracking-wide-2 text-bone/80">
      {label}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-3xl tracking-wide-3 uppercase text-bone">
              Velmora
            </Link>
            <p className="mt-6 max-w-sm text-bone/70 text-sm leading-relaxed font-light">
              Demi-fine jewelry, made to be lived in. 18K gold plated, hypoallergenic, and crafted in small batches — designed for the everyday and the heirloom table.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Velmora on Instagram"
                className="p-2 -ml-2 text-bone/80 hover:text-gold-light transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.4} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Velmora on Facebook"
                className="p-2 text-bone/80 hover:text-gold-light transition-colors"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.4} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="Velmora on YouTube"
                className="p-2 text-bone/80 hover:text-gold-light transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-medium tracking-wide-4 uppercase text-bone">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-bone/70 hover:text-bone transition-colors font-light"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-bone/50 font-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="VISA" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="AMEX" />
            <PaymentIcon label="PAYPAL" />
            <PaymentIcon label="APPLE" />
            <PaymentIcon label="SHOP" />
          </div>
        </div>
      </div>
    </footer>
  );
}
