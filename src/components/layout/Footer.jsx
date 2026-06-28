import { Link } from "react-router-dom";
import { Instagram, Send, Music2 } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/collections" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns", to: "#" },
      { label: "Jewelry Care", to: "#" },
      { label: "Contact", to: "#" },
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

const PAYMENT_LABELS = ["Visa", "Mastercard", "Amex", "Apple Pay", "PayPal", "Klarna"];

export default function Footer() {
  return (
    <footer className="bg-onyx text-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.32em] font-light"
            >
              VELMORA
            </Link>
            <p className="mt-6 font-sans text-sm text-ivory/70 leading-relaxed max-w-sm">
              Demi-fine jewelry, crafted to be treasured. Hand-finished 18K
              gold-plated pieces designed for everyday and ever after.
            </p>
            <div className="mt-8 flex items-center gap-5 text-ivory/70">
              <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.25} />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-champagne transition-colors">
                <Music2 size={18} strokeWidth={1.25} />
              </a>
              <a href="#" aria-label="Newsletter" className="hover:text-champagne transition-colors">
                <Send size={18} strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.28em] text-champagne mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-ivory/75 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-sans text-[11px] uppercase tracking-[0.28em] text-champagne mb-5">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-ivory/75">
              <li>care@velmora.co</li>
              <li>Mon–Fri · 9–6 ET</li>
              <li>New York · Paris</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-sans text-xs text-ivory/60 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENT_LABELS.map((label) => (
              <span
                key={label}
                className="px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-ivory/20 text-ivory/70 rounded-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
