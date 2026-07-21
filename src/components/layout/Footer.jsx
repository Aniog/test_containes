import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Gift Sets" },
      { to: "/shop", label: "All Jewelry" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/about#shipping", label: "Shipping & Returns" },
      { to: "/journal", label: "Care Guide" },
      { to: "/journal", label: "Size Guide" },
      { to: "mailto:hello@velmora.com", label: "Contact Us", external: true },
      { to: "/journal", label: "FAQs" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/about#sustainability", label: "Sustainability" },
      { to: "/about#press", label: "Press" },
      { to: "/about#careers", label: "Careers" },
    ],
  },
];

const PaymentIcon = ({ label }) => (
  <div
    className="h-6 px-2 inline-flex items-center justify-center rounded-sm border border-mocha/40 text-[10px] tracking-wider text-mocha bg-ivory/40"
    aria-label={label}
  >
    {label}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo & tagline */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.18em] inline-block"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              Demi-fine gold jewelry, made to be worn daily and treasured
              longer. Designed in our atelier, finished by hand.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 border border-ivory/20 hover:border-ivory/60 rounded-full transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 border border-ivory/20 hover:border-ivory/60 rounded-full transition-colors"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-2 border border-ivory/20 hover:border-ivory/60 rounded-full transition-colors"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email us"
                className="p-2 border border-ivory/20 hover:border-ivory/60 rounded-full transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] uppercase tracking-[0.28em] font-medium text-ivory/60 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a
                          href={l.to}
                          className="text-ivory/85 hover:text-ivory link-underline"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          to={l.to}
                          className="text-ivory/85 hover:text-ivory link-underline"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline-dark mt-14 mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs text-ivory/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="VISA" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="AMEX" />
            <PaymentIcon label="PAYPAL" />
            <PaymentIcon label="APPLE PAY" />
          </div>
        </div>
      </div>
    </footer>
  );
}
