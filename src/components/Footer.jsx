import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const SHOP_LINKS = [
  { name: "All Jewelry", href: "/shop" },
  { name: "Earrings", href: "/shop?category=earrings" },
  { name: "Necklaces", href: "/shop?category=necklaces" },
  { name: "Huggies", href: "/shop?category=huggies" },
  { name: "Gift Sets", href: "/shop?category=sets" },
];

const HELP_LINKS = [
  { name: "Shipping & Returns", href: "#" },
  { name: "Care Guide", href: "#" },
  { name: "Size Guide", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact Us", href: "#" },
];

const COMPANY_LINKS = [
  { name: "Our Story", href: "#" },
  { name: "Journal", href: "#" },
  { name: "Sustainability", href: "#" },
  { name: "Press", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold uppercase tracking-[0.18em]"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-parchment/80">
              Demi-fine jewelry designed for modern women. Crafted in 18K gold
              plate, made to be treasured and worn every day.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-parchment/80 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-parchment/80 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-parchment/80 transition-colors hover:text-gold"
                aria-label="Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-parchment/80 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Help
            </h4>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-parchment/80 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-parchment/80 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-parchment/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-parchment/60">
            <span className="rounded border border-white/10 px-2 py-1">
              Visa
            </span>
            <span className="rounded border border-white/10 px-2 py-1">
              Mastercard
            </span>
            <span className="rounded border border-white/10 px-2 py-1">
              Amex
            </span>
            <span className="rounded border border-white/10 px-2 py-1">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
