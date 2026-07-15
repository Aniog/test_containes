import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const shopLinks = [
  { label: "All Jewelry", href: "/shop" },
  { label: "Earrings", href: "/shop?category=Earrings" },
  { label: "Necklaces", href: "/shop?category=Necklaces" },
  { label: "Huggies", href: "/shop?category=Huggies" },
  { label: "Gift Sets", href: "/shop?category=Sets" },
];

const helpLinks = [
  { label: "Shipping & Returns", href: "#" },
  { label: "Care Guide", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact Us", href: "#" },
];

const companyLinks = [
  { label: "About Velmora", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Sustainability", href: "#" },
  { label: "Careers", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-espresso py-16 text-ivory">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl uppercase tracking-[0.25em] text-ivory"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              Demi-fine gold jewelry designed to be treasured. Made for everyday
              luxury and the moments that matter.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-widest text-ivory/50">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-widest text-ivory/50">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-widest text-ivory/50">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 md:flex-row">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-ivory/50">
            <span className="rounded border border-ivory/20 px-2 py-1">Visa</span>
            <span className="rounded border border-ivory/20 px-2 py-1">Mastercard</span>
            <span className="rounded border border-ivory/20 px-2 py-1">Amex</span>
            <span className="rounded border border-ivory/20 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
