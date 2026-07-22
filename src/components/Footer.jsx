import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, CreditCard } from "lucide-react";

const columns = [
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
      { label: "Shipping & Returns", to: "/about" },
      { label: "Jewelry Care", to: "/about" },
      { label: "Size Guide", to: "/about" },
      { label: "Contact Us", to: "/about" },
      { label: "FAQ", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Collections", to: "/collections" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-sand">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-[0.35em] text-ivory">
              VELMORA
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/80">
              Demi-fine jewelry crafted to be treasured — 18k gold, made for
              every day and every milestone.
            </p>
            <div className="mt-6 flex gap-5">
              <a href="#" aria-label="Instagram" className="text-sand/80 transition-colors hover:text-gold-light">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-sand/80 transition-colors hover:text-gold-light">
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-sand/80 transition-colors hover:text-gold-light">
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-luxe text-gold-light">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-sand/80 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-sand/15 pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-sand/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-sand/60">
            <CreditCard className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-[11px] uppercase tracking-[0.2em]">
              Visa · Mastercard · Amex · PayPal · Apple Pay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
