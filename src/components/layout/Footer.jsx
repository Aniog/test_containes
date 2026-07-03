import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gifting", to: "/shop?category=sets" },
      { label: "Bestsellers", to: "/shop?sort=featured" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact Us", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

const PAYMENTS = [
  { label: "Visa" },
  { label: "Mastercard" },
  { label: "Amex" },
  { label: "PayPal" },
  { label: "Apple Pay" },
  { label: "Shop Pay" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer className="bg-ink text-ivory">
      <div className="container-page pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <span className="font-serif tracking-[0.32em] text-2xl font-light">
              VELMORA
            </span>
            <p className="text-ivory/70 mt-4 max-w-sm text-sm leading-relaxed">
              Demi-fine jewelry, hand-finished in 18K gold plate. Made to be worn
              daily and treasured for years.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory/70 hover:text-gold-soft transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ivory/70 hover:text-gold-soft transition-colors"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-ivory/70 hover:text-gold-soft transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="eyebrow text-gold-soft">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-gold-soft transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Inline newsletter */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow text-gold-soft">Stay Close</h3>
            <p className="text-sm text-ivory/70 mt-4 leading-relaxed">
              New pieces, restocks, and quiet dispatches from the studio.
            </p>
            <form onSubmit={onSubmit} className="mt-4 flex border-b border-ivory/30 focus-within:border-gold-soft transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 bg-transparent text-ivory placeholder:text-ivory/40 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="text-ivory/80 hover:text-gold-soft p-2"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </form>
            {submitted && (
              <p className="text-xs text-gold-soft mt-2">
                Thank you. Welcome to Velmora.
              </p>
            )}
          </div>
        </div>

        <hr className="my-10 border-ivory/15" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p.label}
                className="px-2.5 py-1 border border-ivory/20 text-[10px] tracking-widest text-ivory/70 uppercase"
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
