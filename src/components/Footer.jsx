import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const footerLinks = {
  Shop: [
    { name: "All Jewelry", path: "/shop" },
    { name: "Earrings", path: "/shop?category=earrings" },
    { name: "Necklaces", path: "/shop?category=necklaces" },
    { name: "Huggies", path: "/shop?category=huggies" },
    { name: "Gift Sets", path: "/shop?category=sets" },
  ],
  Help: [
    { name: "Shipping & Returns", path: "/shipping" },
    { name: "Care Guide", path: "/care" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Journal", path: "/journal" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Stockists", path: "/stockists" },
  ],
};

const paymentIcons = [
  "Visa",
  "MC",
  "Amex",
  "PayPal",
  "Klarna",
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        {/* Top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl font-medium tracking-[0.12em] uppercase text-foreground"
            >
              Velmora
            </Link>
            <p className="mt-3 font-sans text-xs leading-relaxed text-foreground/50 max-w-xs">
              Demi-fine gold jewelry crafted for life&apos;s everyday moments and
              most treasured occasions.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-background"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-background"
                aria-label="Pinterest"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.1em] text-foreground">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-sans text-xs text-foreground/50 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="hairline mt-12 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-sans text-xs text-foreground/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-foreground/30"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}