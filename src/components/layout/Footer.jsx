import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const SHOP_LINKS = [
  { label: "All Jewelry", href: "/shop" },
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Huggies", href: "/shop?category=huggies" },
  { label: "Gift Sets", href: "/shop?category=sets" },
];

const HELP_LINKS = [
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Care Guide", href: "/care" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const COMPANY_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Journal", href: "/journal" },
  { label: "Press", href: "/press" },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-velmora-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-3xl font-semibold tracking-[0.12em]"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-velmora-cream/70">
              Demi-fine jewelry designed for everyday luxury. Thoughtfully
              crafted, fairly priced, and made to be treasured.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/velmorajewelry"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-velmora-border-dark p-2 transition-colors hover:border-velmora-gold hover:text-velmora-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/velmorajewelry"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-velmora-border-dark p-2 transition-colors hover:border-velmora-gold hover:text-velmora-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/velmorajewelry"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-velmora-border-dark p-2 transition-colors hover:border-velmora-gold hover:text-velmora-gold"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]">
              Shop
            </h3>
            <ul className="space-y-3 text-sm text-velmora-cream/70">
              {SHOP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="transition-colors hover:text-velmora-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]">
              Help
            </h3>
            <ul className="space-y-3 text-sm text-velmora-cream/70">
              {HELP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="transition-colors hover:text-velmora-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-velmora-cream/70">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="transition-colors hover:text-velmora-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-dark mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-velmora-cream/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="rounded border border-velmora-border-dark px-2 py-1">VISA</span>
            <span className="rounded border border-velmora-border-dark px-2 py-1">MC</span>
            <span className="rounded border border-velmora-border-dark px-2 py-1">Amex</span>
            <span className="rounded border border-velmora-border-dark px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
