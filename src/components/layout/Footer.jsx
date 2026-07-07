import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { CATEGORIES } from "@/data/products";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      ...CATEGORIES.map((c) => ({ label: c.name, to: `/shop/${c.id}` })),
      { label: "Gift Sets", to: "/shop/sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Care Instructions", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
    ],
  },
];

const paymentIcons = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Apple Pay",
  "Klarna",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-container mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12 md:gap-16">
          <div>
            <div className="font-serif text-2xl tracking-[0.3em]">VELMORA</div>
            <p className="mt-5 text-sm text-ivory/70 max-w-xs leading-relaxed">
              Demi-fine jewelry, made to be lived in. Designed in Lisbon, made for
              the everyday ritual.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 grid place-items-center border border-ivory/20 hover:border-ivory/60 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-9 h-9 grid place-items-center border border-ivory/20 hover:border-ivory/60 transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] uppercase tracking-editorial text-ivory/90">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/65 hover:text-ivory transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((p) => (
              <li
                key={p}
                className="text-[10px] tracking-editorial uppercase px-2.5 py-1.5 border border-ivory/15 text-ivory/60"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
