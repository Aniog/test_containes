import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Delivery", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Jewelry Care", to: "/journal" },
      { label: "Size Guide", to: "/journal" },
      { label: "Contact Us", to: "/about" },
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

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "G PAY"];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl tracking-[0.35em]">VELMORA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/80">
              Demi-fine jewelry crafted to be treasured. 18K gold plated,
              hypoallergenic, and made for every day you want to remember.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-sand/80 transition-colors hover:text-gold-light"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-sand/80 transition-colors hover:text-gold-light"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-sand/80 transition-colors hover:text-gold-light"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-[11px] tracking-[0.2em] text-sand/80 transition-colors hover:text-gold-light"
              >
                PIN
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-[11px] tracking-[0.2em] text-sand/80 transition-colors hover:text-gold-light"
              >
                TikTok
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold-light">
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

        <div className="mt-14 flex flex-col gap-6 border-t border-ivory/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="border border-ivory/20 px-2.5 py-1 text-[10px] tracking-[0.15em] text-sand/80"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-xs text-sand/60 tracking-wide">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
