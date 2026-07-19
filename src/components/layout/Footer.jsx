import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=earrings" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/journal" },
      { label: "Care Guide", to: "/journal" },
      { label: "Size Guide", to: "/journal" },
      { label: "Contact Us", to: "/journal" },
      { label: "FAQ", to: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Press", to: "/journal" },
      { label: "Careers", to: "/about" },
    ],
  },
];

function PaymentIcon({ label }) {
  return (
    <div className="h-7 w-10 grid place-items-center border border-taupe rounded-sm text-[9px] uppercase tracking-wider-2 text-mocha">
      {label}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider-2 block mb-5">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-ivory/70 max-w-xs">
              Demi-fine jewelry, made to be worn every day and treasured always.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gold-soft transition-colors"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gold-soft transition-colors"
              >
                <Facebook className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-gold-soft transition-colors"
              >
                <Youtube className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-gold-soft mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-ivory transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="PayPal" />
            <PaymentIcon label="Apple" />
            <PaymentIcon label="G Pay" />
          </div>
          <p className="text-xs text-ivory/60 tracking-wider-2 uppercase">
            © 2026 Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  );
}
