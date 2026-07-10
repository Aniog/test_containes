import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";

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
      { label: "Shipping", to: "/help/shipping" },
      { label: "Returns & Exchanges", to: "/help/returns" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Contact Us", to: "/help/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about#materials" },
      { label: "Journal", to: "/journal" },
      { label: "Press", to: "/about#press" },
      { label: "Careers", to: "/about#careers" },
    ],
  },
];

// Stylized SVG payment marks (no real brand images needed).
function PaymentMark({ children, label }) {
  return (
    <span
      title={label}
      className="inline-flex items-center justify-center h-7 px-2.5 border border-hairline text-[10px] uppercase tracking-[0.18em] text-cocoa-soft"
    >
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ivory-light border-t border-hairline">
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link to="/" className="serif-display text-2xl tracking-[0.18em] uppercase text-cocoa">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cocoa-soft leading-relaxed max-w-xs">
              Demi-fine jewelry, thoughtfully designed and hand-finished in our Los Angeles studio. Quiet luxury for the everyday.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on Instagram"
                className="h-10 w-10 border border-hairline flex items-center justify-center text-cocoa hover:border-cocoa hover:text-claret transition-colors duration-300"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on TikTok"
                className="h-10 w-10 border border-hairline flex items-center justify-center text-cocoa hover:border-cocoa hover:text-claret transition-colors duration-300"
              >
                <Send className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on Pinterest"
                className="h-10 w-10 border border-hairline flex items-center justify-center text-cocoa hover:border-cocoa hover:text-claret transition-colors duration-300"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.18em]">Pin</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] font-medium uppercase tracking-wider2 text-claret">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-cocoa hover:text-claret transition-colors duration-300"
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

        {/* Hairline + bottom row */}
        <div className="mt-14 pt-8 border-t border-hairline flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentMark label="Visa">VISA</PaymentMark>
            <PaymentMark label="Mastercard">MC</PaymentMark>
            <PaymentMark label="American Express">AMEX</PaymentMark>
            <PaymentMark label="PayPal">PayPal</PaymentMark>
            <PaymentMark label="Apple Pay">Pay</PaymentMark>
          </div>
        </div>
      </div>
    </footer>
  );
}
