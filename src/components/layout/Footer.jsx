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
      { to: "/shop?category=earrings&sort=newest", label: "New Arrivals" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Shipping & Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Size Guide" },
      { to: "#", label: "Order Status" },
      { to: "#", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Press" },
      { to: "#", label: "Careers" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Klarna"];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-velmora pt-20 pb-10 md:pt-28 md:pb-12">
        <div className="grid gap-12 md:gap-8 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.3em] font-light text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70 text-pretty">
              Demi-fine gold jewelry, designed in our atelier and crafted to be
              treasured — for everyday rituals and the moments that mark them.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory/80 hover:text-bronze-light transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.25} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="text-ivory/80 hover:text-bronze-light transition-colors"
              >
                <Mail className="w-5 h-5" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-ivory/60 mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-ivory/85 hover:text-bronze-light transition-colors"
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

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ivory/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory/65 border border-ivory/20"
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
