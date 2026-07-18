import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const cols = [
  {
    title: "Shop",
    items: [
      { label: "Earrings", to: "/shop?cat=earrings" },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies", to: "/shop?cat=huggies" },
      { label: "The Everyday Edit", to: "/collections" },
      { label: "Gift Sets", to: "/shop" },
    ],
  },
  {
    title: "Help",
    items: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

const payments = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"];

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Twitter, label: "X" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-hairline">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-20">
        {/* Top row: brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-16">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] font-medium text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-muted">
              Demî-fine jewelry, made to be lived in. Designed in New York, hand-finished
              in small batches, and shipped with care — to you, and to the people you love.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="p-2 text-ivory-muted hover:text-gold transition-colors"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.25} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-sans uppercase tracking-eyebrow text-gold mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to={it.to}
                        className="text-sm text-ivory-muted hover:text-ivory transition-colors"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-hairline pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-ivory-dim tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-button uppercase font-medium text-ivory-muted border border-hairline px-2.5 py-1.5"
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
