import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const cols = [
  {
    title: "Shop",
    items: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/collections/earrings", label: "Earrings" },
      { to: "/collections/necklaces", label: "Necklaces" },
      { to: "/collections/huggies", label: "Huggies" },
      { to: "/shop?sort=new", label: "New Arrivals" },
    ],
  },
  {
    title: "Help",
    items: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns & Exchanges" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    items: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/wholesale", label: "Wholesale" },
      { to: "/press", label: "Press" },
    ],
  },
];

const PaymentBadge = ({ children }) => (
  <span className="inline-flex h-6 items-center justify-center rounded-sm border border-ivory-100/20 px-2 text-[10px] font-sans tracking-widest2 text-ivory-100/80">
    {children}
  </span>
);

export default function Footer() {
  return (
    <footer className="bg-ink-800 text-ivory-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-[0.18em] text-ivory-50">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory-100/70">
              Demi-fine gold jewelry, designed in small batches and made to be
              worn — and treasured — every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory-100/80 hover:text-gold-300 transition-colors">
                <Instagram className="h-5 w-5" strokeWidth={1.4} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory-100/80 hover:text-gold-300 transition-colors">
                <Facebook className="h-5 w-5" strokeWidth={1.4} />
              </a>
              <a href="#" aria-label="YouTube" className="text-ivory-100/80 hover:text-gold-300 transition-colors">
                <Youtube className="h-5 w-5" strokeWidth={1.4} />
              </a>
              <a href="mailto:hello@velmora.co" aria-label="Email" className="text-ivory-100/80 hover:text-gold-300 transition-colors">
                <Mail className="h-5 w-5" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-sans uppercase tracking-widest2 text-[11px] text-ivory-100/60">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="text-ivory-100/85 hover:text-gold-300 transition-colors duration-300"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-ivory-100/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory-100/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentBadge>Visa</PaymentBadge>
            <PaymentBadge>Mastercard</PaymentBadge>
            <PaymentBadge>Amex</PaymentBadge>
            <PaymentBadge>Apple Pay</PaymentBadge>
            <PaymentBadge>PayPal</PaymentBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}
