import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Send } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Hairline from "@/components/ui/Hairline";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", to: "/about" },
      { label: "Shipping & Returns", to: "/about" },
      { label: "Care Guide", to: "/about" },
      { label: "FAQ", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/journal" },
      { label: "Journal", to: "/journal" },
    ],
  },
];

const PaymentIcon = ({ label }) => (
  <span
    className="inline-flex items-center justify-center h-7 px-2 border border-ivory/20 rounded text-[10px] font-sans uppercase tracking-eyebrow text-ivory/80"
    aria-label={label}
  >
    {label}
  </span>
);

const Footer = () => {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-20 pb-10">
        {/* Top: logo + tagline */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-16">
          <div>
            <Logo tone="ivory" size="lg" />
            <p className="mt-6 text-ivory/70 font-serif text-2xl leading-snug max-w-md">
              Demi-fine gold jewelry, designed in the studio and made to be worn — not stored.
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-[11px] uppercase tracking-eyebrow text-ivory/50 mb-4">
              Follow along
            </p>
            <div className="flex md:justify-end gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 text-ivory/80 hover:text-gold transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="p-2 text-ivory/80 hover:text-gold transition-colors"
              >
                <Send size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <Hairline tone="ivory" className="mb-14" />

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-[11px] uppercase tracking-eyebrow text-ivory/50 mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-ivory/85 hover:text-ivory transition-colors font-sans text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-eyebrow text-ivory/50 mb-5">
              Stay in touch
            </h3>
            <p className="text-ivory/70 text-sm mb-4 leading-relaxed">
              Quiet notes on new pieces, behind-the-scenes from the studio, and a small welcome.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-0 border-b border-ivory/30 focus-within:border-gold transition-colors pb-2"
            >
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 bg-transparent text-ivory placeholder:text-ivory/40 text-sm outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-ivory/80 hover:text-gold transition-colors"
              >
                <Send size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        <Hairline tone="ivory" className="mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[11px] uppercase tracking-eyebrow text-ivory/50">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="PayPal" />
            <PaymentIcon label="Apple Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
