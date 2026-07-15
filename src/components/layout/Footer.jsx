import { Link } from "react-router-dom";
import { Instagram, Send } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Sets & Gifts", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/about#shipping" },
      { label: "Care Guide", to: "/journal/care-guide" },
      { label: "Size Guide", to: "/about#sizing" },
      { label: "Contact", to: "/about#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#sustainability" },
      { label: "Press", to: "/about#press" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-logo font-medium text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-6 text-ivory/70 text-[15px] leading-relaxed max-w-sm">
              Demi-fine 18K gold plated jewelry, designed in our studio and
              made to be worn every day. Quiet luxury, considered down to the
              last clasp.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 inline-flex items-center justify-center border border-ivory/30 text-ivory/80 hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram size={16} strokeWidth={1.4} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 inline-flex items-center justify-center border border-ivory/30 text-ivory/80 hover:border-gold hover:text-gold transition-colors"
              >
                <Send size={16} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-8 grid grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-gold-soft">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-ivory/80 hover:text-ivory transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-16 mb-6 bg-ivory/15" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] text-ivory/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center justify-center h-7 px-3 border border-ivory/20 text-[10px] uppercase tracking-eyebrow text-ivory/70"
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
