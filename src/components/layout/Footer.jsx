import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?collection=earrings" },
      { label: "Necklaces", to: "/shop?collection=necklaces" },
      { label: "Huggies", to: "/shop?collection=huggies" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/journal" },
      { label: "Care Guide", to: "/journal" },
      { label: "Contact Us", to: "/about" },
      { label: "FAQ", to: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/journal" },
      { label: "Press", to: "/journal" },
    ],
  },
];

function PaymentIcon({ children, label }) {
  return (
    <div
      className="h-7 w-11 border border-line rounded-sm flex items-center justify-center text-[9px] tracking-wider text-ash bg-ivory"
      aria-label={label}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest2 text-ivory"
            >
              VELMORA
            </Link>
            <p
              id="footer-tagline"
              className="mt-5 text-sm text-ivory/70 leading-relaxed max-w-xs"
            >
              Demi-fine gold jewelry, handcrafted for the everyday. Designed in
              small batches, made to be treasured.
            </p>
            <div className="mt-6 flex items-center gap-4 text-ivory/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-gold transition"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="hover:text-gold transition"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans text-[11px] tracking-widest2 text-ivory/60 uppercase">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/85 hover:text-gold transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-sans text-[11px] tracking-widest2 text-ivory/60 uppercase">
              Connect
            </h4>
            <p className="mt-5 text-sm text-ivory/85 leading-relaxed">
              hello@velmora.com
            </p>
            <p className="mt-1 text-sm text-ivory/70">Mon–Fri, 9–5 EST</p>
          </div>
        </div>

        <div className="hairline mt-16 bg-ivory/15" />

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-ivory/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="PayPal">PAYPAL</PaymentIcon>
            <PaymentIcon label="Apple Pay">PAY</PaymentIcon>
            <PaymentIcon label="Shop Pay">SHOP</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
