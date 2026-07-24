import { Link } from "react-router-dom";
import { Instagram, Pin } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
      { label: "Bestsellers", to: "/shop?sort=bestsellers" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "Contact", to: "/help/contact" },
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

const PAYMENT_ICONS = ["Visa", "MC", "Amex", "PayPal", "Apple Pay", "G Pay"];

export default function Footer() {
  return (
    <footer className="bg-onyx-900 text-cream-200 mt-24">
      <div className="container-wide pt-20 pb-10">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <Link
              to="/"
              className="font-display text-[28px] tracking-widest-2 text-cream-100 leading-none"
            >
              VELMORA
            </Link>
            <p className="font-display italic text-[18px] text-cream-200/70 mt-4 max-w-[36ch] leading-snug">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              Stockholm, worn everywhere.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 text-cream-200/70 hover:text-gold-300 transition-colors"
              >
                <Instagram size={18} strokeWidth={1.4} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="p-2 text-cream-200/70 hover:text-gold-300 transition-colors"
              >
                <Pin size={18} strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="p-2 text-cream-200/70 hover:text-gold-300 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans uppercase tracking-widest-2 text-[11px] text-gold-300 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[14px] text-cream-200/80 hover:text-cream-100 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hairline */}
        <div className="my-12 h-px bg-cream-200/10" />

        {/* Bottom: payments + legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 flex-wrap">
            {PAYMENT_ICONS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center justify-center h-7 px-3 border border-cream-200/20 text-[10px] tracking-widest-2 text-cream-200/70 uppercase"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-cream-200/50">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <Link to="/legal/privacy" className="hover:text-cream-100">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-cream-100">Terms</Link>
            <Link to="/legal/cookies" className="hover:text-cream-100">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
