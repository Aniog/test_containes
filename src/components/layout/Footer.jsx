import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=earrings" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Sizing", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "#" },
      { label: "Journal", to: "#" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-ivory">
      <div className="mx-auto max-w-editorial px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-display text-2xl tracking-[0.18em] uppercase"
            >
              Velmora
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
              Velmora is a demi-fine jewelry house crafting 18K gold plated
              pieces for the everyday ritual — designed to be layered, given,
              and worn for years.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center border border-ivory/20 hover:border-gold-soft hover:text-gold-soft transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center border border-ivory/20 hover:border-gold-soft hover:text-gold-soft transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="eyebrow eyebrow-on-dark">{col.title}</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-ivory/75 hover:text-gold-soft transition-colors"
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

        <div className="mt-14 hairline-dark" />

        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between text-[11px] tracking-eyebrow uppercase text-ivory/55">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4">
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="rounded-sm border border-ivory/15 px-2.5 py-1 text-[10px]"
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
