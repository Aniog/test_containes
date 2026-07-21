import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
      { label: "Bestsellers", to: "/shop" },
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
      { label: "Press", to: "/about" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "G PAY"];

function PinterestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.44 7.58 5.94 9.13-.08-.78-.16-1.97.03-2.82.17-.73 1.1-4.65 1.1-4.65s-.28-.56-.28-1.39c0-1.3.75-2.27 1.69-2.27.8 0 1.18.6 1.18 1.31 0 .8-.51 2-.77 3.11-.22.93.46 1.68 1.37 1.68 1.65 0 2.92-1.74 2.92-4.25 0-2.22-1.6-3.78-3.88-3.78-2.64 0-4.2 1.98-4.2 4.03 0 .8.31 1.66.69 2.12.08.09.09.17.07.27-.07.31-.24.98-.27 1.11-.04.18-.14.22-.33.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold uppercase tracking-[0.28em] text-ivory"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              Demi-fine jewelry in 18K gold plate — designed in our atelier,
              made to be worn every day and treasured for years.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-stone transition-colors hover:text-gold">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-stone transition-colors hover:text-gold">
                <PinterestIcon />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone transition-colors hover:text-gold">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-stone transition-colors hover:text-gold">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-goldlight">
                {col.title}
              </h3>
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

        <div className="mt-14 flex flex-col gap-6 border-t border-linedark pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="border border-linedark px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-stone"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
