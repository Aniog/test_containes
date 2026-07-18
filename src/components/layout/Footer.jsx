import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gifts & Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", to: "/about" },
      { label: "Shipping", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Care Guide", to: "/about" },
      { label: "FAQ", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Press", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
];

function PaymentIcon({ children, label }) {
  return (
    <div
      className="h-7 px-2.5 inline-flex items-center justify-center border border-dune text-[10px] uppercase tracking-widest2 text-taupe bg-surface"
      aria-label={label}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-canvas text-espresso border-t border-dune">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-[0.28em] font-light">VELMORA</div>
            <p className="mt-5 text-sm text-taupe leading-relaxed max-w-sm">
              Demi-fine jewelry, crafted to be treasured. 18K gold-plated, hypoallergenic, and
              made for the everyday and the heirloom years.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-taupe hover:text-espresso transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-taupe hover:text-espresso transition-colors"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="text-taupe hover:text-espresso transition-colors"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-widest2 font-medium text-espresso mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-taupe hover:text-espresso transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest2 font-medium text-espresso mb-5">
              Stay in touch
            </h4>
            <p className="text-sm text-taupe leading-relaxed">
              Quiet drops, restocks, and the occasional love letter.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dune flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-taupe tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="Apple Pay">PAY</PaymentIcon>
            <PaymentIcon label="Google Pay">G PAY</PaymentIcon>
            <PaymentIcon label="Shop Pay">SHOP</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
