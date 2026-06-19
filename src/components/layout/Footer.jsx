import React from "react";
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
      { to: "/shop?category=sets", label: "Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Materials & Care" },
      { to: "/help/faq", label: "FAQ" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

function PaymentIcon({ children, label }) {
  return (
    <span
      aria-label={label}
      className="inline-flex items-center justify-center h-6 px-2 border border-line-dark rounded-sm font-serif text-[10px] tracking-widest2 text-gold-soft/80"
    >
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="font-serif text-2xl tracking-[0.25em] text-ivory">
              VELMORA
            </div>
            <p className="mt-6 font-serif text-xl md:text-2xl text-ivory/90 leading-snug max-w-sm">
              Demi-fine jewelry, designed to be worn every day and treasured for years.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gold-soft hover:text-ivory transition-colors duration-300"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:care@velmora.co"
                aria-label="Email us"
                className="text-gold-soft hover:text-ivory transition-colors duration-300"
              >
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2">
              <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-gold-soft">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-ivory/80 hover:text-ivory transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-gold-soft">
              Studio
            </h3>
            <p className="mt-6 font-sans text-sm text-ivory/80 leading-relaxed">
              Velmora Fine Jewelry
              <br />
              118 Bond Street
              <br />
              New York, NY 10012
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line-dark flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-sans text-[11px] tracking-widest2 text-ivory/60 uppercase">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="PayPal">PAYPAL</PaymentIcon>
            <PaymentIcon label="Apple Pay">APPLE</PaymentIcon>
            <PaymentIcon label="Klarna">KLARNA</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
