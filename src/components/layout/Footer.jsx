import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import { useStrkImage } from "@/hooks/useStrkImage";
import { useRef } from "react";

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Pieces", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/info?topic=shipping" },
      { label: "Care Guide", to: "/info?topic=care" },
      { label: "Sizing", to: "/info?topic=sizing" },
      { label: "Contact", to: "/info?topic=contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/info?topic=sustainability" },
      { label: "Press", to: "/info?topic=press" },
    ],
  },
];

function PaymentIcon({ label }) {
  return (
    <span
      className="inline-flex h-6 w-10 items-center justify-center border border-cream/25 text-[9px] tracking-[0.2em] text-cream/80 font-medium"
      aria-label={label}
    >
      {label}
    </span>
  );
}

export default function Footer() {
  const ref = useRef(null);
  useStrkImage(ref, []);
  return (
    <footer className="bg-espresso text-cream" ref={ref}>
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5 lg:col-span-5">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.18em] font-light"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              Demi-fine jewelry, designed in small batches and made to be
              lived in. Quietly considered. Endlessly worn.
            </p>
            <div className="mt-7 flex items-center gap-4 text-cream/80">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-300 hover:text-champagne"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="transition-colors duration-300 hover:text-champagne"
              >
                <Mail className="h-5 w-5" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="transition-colors duration-300 hover:text-champagne"
              >
                <span className="text-xs uppercase tracking-label">Tk</span>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="transition-colors duration-300 hover:text-champagne"
              >
                <span className="text-xs uppercase tracking-label">Pn</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] uppercase tracking-eyebrow text-champagne">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-cream/80 transition-colors duration-300 hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentIcon label="VISA" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="AMEX" />
            <PaymentIcon label="PAYPAL" />
            <PaymentIcon label="APPLE" />
          </div>
        </div>
      </div>
    </footer>
  );
}
