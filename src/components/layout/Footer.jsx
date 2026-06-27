import * as React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/faq", label: "FAQ" },
      { to: "/help/contact", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

const PAYMENT_METHODS = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Apple Pay",
  "Shop Pay",
];

export function Footer() {
  return (
    <footer className="bg-cocoa text-bone">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] uppercase text-bone hover:text-gold-light transition-colors duration-300"
            >
              Velmora
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-bone-muted max-w-xs">
              Demi-fine jewelry, hand-finished in 18K gold plate. Designed in
              the studio, made to be worn every day — and kept forever.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-bone hover:text-gold-light transition-colors duration-300"
              >
                <Instagram strokeWidth={1.25} className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="text-xs uppercase tracking-button font-medium text-bone hover:text-gold-light transition-colors duration-300"
              >
                Pinterest
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-xs uppercase tracking-button font-medium text-bone hover:text-gold-light transition-colors duration-300"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-eyebrow font-medium text-bone-muted">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone hover:text-gold-light transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-eyebrow font-medium text-bone-muted">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-bone">
              <li>
                <a
                  href="mailto:hello@velmora.com"
                  className="hover:text-gold-light transition-colors duration-300"
                >
                  hello@velmora.com
                </a>
              </li>
              <li className="text-bone-muted leading-relaxed">
                Mon–Fri, 9–5 EST
                <br />
                Studio replies within one business day
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-hairline-dark flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-bone-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENT_METHODS.map((m) => (
              <span
                key={m}
                className="text-[10px] uppercase tracking-button font-medium text-bone-muted border border-hairline-dark px-2.5 py-1"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
