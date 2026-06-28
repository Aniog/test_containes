import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

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
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Jewelry Care", to: "/help/care" },
      { label: "Size Guide", to: "/help/sizing" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Press", to: "/press" },
      { label: "Stockists", to: "/stockists" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "KLARNA"];

export default function Footer() {
  return (
    <footer className="bg-mocha text-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl md:text-4xl tracking-[0.32em] font-medium block mb-5"
            >
              VELMORA
            </Link>
            <p className="text-sm text-ivory/70 leading-relaxed max-w-sm">
              Demi-fine jewelry, considered and crafted in small batches. Designed in
              Lisbon, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-7">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-ivory/70 hover:text-champagne transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-ivory/70 hover:text-champagne transition-colors"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-ivory/70 hover:text-champagne transition-colors"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.22em] font-medium text-champagne mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-champagne transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gold-soft/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-ivory/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.18em] font-medium text-ivory/60 border border-ivory/20 px-2.5 py-1.5"
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
