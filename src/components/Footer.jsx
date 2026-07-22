import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, Facebook, Instagram, Youtube } from "lucide-react";

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
      { label: "Shipping & Delivery", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Jewelry Care", to: "/about" },
      { label: "Size Guide", to: "/about" },
      { label: "Contact Us", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Press", to: "/journal" },
    ],
  },
];

const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "YouTube", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link
              to="/"
              className="font-serif text-3xl font-semibold tracking-[0.28em] text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-[32ch] text-sm leading-relaxed text-[#D8CDBC]">
              Demi-fine jewelry in warm 18k gold — crafted in small batches to
              be treasured daily and gifted beautifully.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-all duration-300 hover:border-gold-soft hover:text-gold-soft"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-soft">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#D8CDBC] transition-colors duration-300 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-ivory/15 pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-ivory/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2" aria-label="Accepted payments">
            {["Visa", "MC", "Amex", "PayPal", "Apple Pay"].map((name) => (
              <span
                key={name}
                className="flex items-center gap-1.5 border border-ivory/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-ivory/75"
              >
                <CreditCard className="h-3 w-3" strokeWidth={1.5} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
