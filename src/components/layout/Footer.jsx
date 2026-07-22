import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?badge=gift", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "30-Day Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/journal", label: "Journal" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <span className="font-serif text-3xl tracking-[0.32em] uppercase">
              Velmora
            </span>
            <p className="mt-5 text-sm text-cream/70 font-sans font-light max-w-xs leading-relaxed">
              Demi-fine jewelry, hand-finished in 18K gold plating. Designed in
              small batches to be worn — and treasured — for years.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram strokeWidth={1.25} className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Mail strokeWidth={1.25} className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-gold mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-cream/80 hover:text-gold transition-colors font-sans font-light"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-cream/15 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-[11px] uppercase tracking-wider-3 font-sans text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="text-[10px] uppercase tracking-wider-2 font-sans text-cream/55 border border-cream/15 rounded-sm px-2 py-1"
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
