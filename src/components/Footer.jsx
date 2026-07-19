import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { BRAND, FOOTER_COLUMNS } from "@/data/site";

const PaymentIcon = ({ children, label }) => (
  <span
    className="inline-flex h-6 items-center justify-center rounded-sm border border-line-dark bg-mocha px-2 text-[10px] font-medium tracking-wider-2 text-stone"
    aria-label={label}
  >
    {children}
  </span>
);

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7.5xl px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-3xl tracking-wider-2 text-ivory"
            >
              {BRAND.name.toUpperCase()}
            </Link>
            <p className="mt-4 max-w-sm font-serif italic text-[15px] leading-relaxed text-stone">
              Quietly considered demi-fine jewelry, made to live in.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-ivory/80 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.co"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-ivory/80 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans text-[11px] uppercase tracking-wider-2 text-gold-soft">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-sans text-sm text-ivory/75 transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-stone">
            © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="Apple Pay">PAY</PaymentIcon>
            <PaymentIcon label="Google Pay">G PAY</PaymentIcon>
            <PaymentIcon label="Shop Pay">SHOP</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
