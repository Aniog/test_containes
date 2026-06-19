import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/collections", label: "Gift Sets" },
    ],
  },
  {
    heading: "Help",
    links: [
      { to: "/about", label: "Contact Us" },
      { to: "/about", label: "Shipping & Returns" },
      { to: "/about", label: "Care Guide" },
      { to: "/about", label: "FAQs" },
      { to: "/about", label: "Order Status" },
    ],
  },
  {
    heading: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "The Journal" },
      { to: "/about", label: "Sustainability" },
      { to: "/about", label: "Press" },
      { to: "/about", label: "Careers" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"];

export default function Footer() {
  return (
    <footer className="bg-ink text-bone mt-24">
      <div className="container-velmora py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] font-light text-bone"
            >
              VELMORA
            </Link>
            <p className="mt-6 text-sm text-bone/70 max-w-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in our studio,
              finished by hand, and meant for the quiet rituals of everyday
              luxury.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="text-bone/70 hover:text-bone transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="text-bone/70 hover:text-bone transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="text-bone/70 hover:text-bone transition-colors"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] uppercase tracking-eyebrow text-bone/80 mb-5">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-bone/70 hover:text-bone transition-colors"
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

        <div className="mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[11px] uppercase tracking-eyebrow text-bone/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center flex-wrap gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 text-[10px] tracking-eyebrow uppercase border border-bone/20 text-bone/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}