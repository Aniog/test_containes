import { Link } from "react-router-dom";
import { Instagram, Pin } from "lucide-react";
import Eyebrow from "../ui/Eyebrow.jsx";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gifts", to: "/shop?category=gifts" },
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
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#materials" },
      { label: "Press", to: "/about#press" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-wide px-6 pb-10 pt-20 md:px-10 md:pt-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-[24px] tracking-wider2 text-ink-100">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm font-serif text-[18px] leading-relaxed text-ink-300">
              Demi-fine jewelry, crafted in small batches and made for the
              everyday. Worn alone. Stacked forever.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-200 transition-colors duration-300 hover:border-gold-500 hover:text-gold-300"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-200 transition-colors duration-300 hover:border-gold-500 hover:text-gold-300"
              >
                <Pin size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <Eyebrow tone="gold">{col.title}</Eyebrow>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-sans text-[13px] text-ink-200 transition-colors duration-300 hover:text-gold-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <Eyebrow tone="gold">Studio</Eyebrow>
            <p className="mt-5 font-sans text-[13px] leading-relaxed text-ink-300">
              118 Mulberry Street
              <br />
              New York, NY 10013
            </p>
            <p className="mt-3 font-sans text-[12px] text-ink-500">
              hello@velmora.co
            </p>
          </div>
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-ink-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="flex h-7 min-w-12 items-center justify-center rounded-sm border border-ink-700 px-2 font-sans text-[9px] font-medium uppercase tracking-wider2 text-ink-300"
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
