import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop?cat=gift", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Shipping & Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Size Guide" },
      { to: "#", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Press" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PayPal", "Apple Pay"];

export default function Footer() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <footer
      ref={containerRef}
      className="bg-espresso-900 text-ivory-50/80 pt-20 pb-10 mt-12"
    >
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-16">
          <Link
            to="/"
            className="font-display text-3xl md:text-4xl tracking-[0.22em] text-ivory-50"
          >
            VELMORA
          </Link>
          <p className="mt-4 max-w-md text-sm text-ivory-50/65 leading-relaxed">
            Demi-fine 18K gold-plated jewelry, hand-finished in small batches. Designed to be
            worn — and treasured — for years.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-14 border-b border-ivory-50/10">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-ivory-50/55 mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory-50/80 hover:text-champagne-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="eyebrow text-ivory-50/55 mb-5">Stay in Touch</h4>
            <p className="text-sm text-ivory-50/70 mb-4">
              Quiet notes, first access, and a small welcome gift.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center border-b border-ivory-50/25 focus-within:border-champagne-300 transition-colors"
            >
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 bg-transparent py-2 text-sm text-ivory-50 placeholder:text-ivory-50/40 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="p-2 text-ivory-50/70 hover:text-champagne-300 transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.4} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ivory-50/55">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 text-[10px] tracking-button uppercase border border-ivory-50/15 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-ivory-50/70 hover:text-champagne-300 transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.4} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="text-ivory-50/70 hover:text-champagne-300 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4c-.5 0-1-.1-1.5-.3" />
                <path d="M10 22l2-9" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-ivory-50/70 hover:text-champagne-300 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12v6a3 3 0 0 0 6 0v-5" />
                <path d="M15 8a4 4 0 0 0 4 4" />
                <path d="M15 4v8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
