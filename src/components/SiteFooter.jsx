import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, CreditCard } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Delivery", to: "/journal" },
      { label: "Returns & Exchanges", to: "/journal" },
      { label: "Jewelry Care", to: "/journal" },
      { label: "Contact Us", to: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Materials", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function SiteFooter() {
  return (
    <footer className="border-t border-noir-line bg-noir-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-semibold uppercase tracking-[0.3em] text-cream"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand">
              Demi-fine gold jewelry, crafted to be treasured. 18K gold plated, hypoallergenic,
              and made for every day.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-noir-line text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/75 transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-noir-line pt-8 md:flex-row">
          <p className="text-xs text-sand">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            <CreditCard className="h-4 w-4 text-sand" />
            {PAYMENTS.map((name) => (
              <span
                key={name}
                className="border border-noir-line px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-sand"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
