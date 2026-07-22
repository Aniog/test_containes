import { Link } from "react-router-dom";
import { Instagram, Facebook, Pinterest } from "lucide-react";

const shopLinks = [
  { label: "All Jewelry", href: "/shop" },
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Huggies", href: "/shop?category=huggies" },
  { label: "Gift Sets", href: "/shop?category=sets" },
];

const helpLinks = [
  { label: "Shipping & Returns", href: "/#" },
  { label: "Size Guide", href: "/#" },
  { label: "Care Instructions", href: "/#" },
  { label: "FAQ", href: "/#" },
  { label: "Contact Us", href: "/#" },
];

const companyLinks = [
  { label: "Our Story", href: "/#about" },
  { label: "Sustainability", href: "/#" },
  { label: "Press", href: "/#" },
  { label: "Careers", href: "/#" },
  { label: "Journal", href: "/#" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-light tracking-widest2 text-ivory hover:text-gold-light transition-colors"
            >
              VELMORA
            </Link>
            <p className="font-manrope text-xs text-warm-gray-lt leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic,
              18K gold plated, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-warm-gray-lt hover:text-gold-light transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-warm-gray-lt hover:text-gold-light transition-colors"
              >
                <Pinterest className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-warm-gray-lt hover:text-gold-light transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-[10px] uppercase tracking-widest text-warm-gray-lt mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-manrope text-xs text-ivory/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-[10px] uppercase tracking-widest text-warm-gray-lt mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-manrope text-xs text-ivory/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-[10px] uppercase tracking-widest text-warm-gray-lt mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-manrope text-xs text-ivory/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-[10px] text-warm-gray-lt uppercase tracking-widest">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="font-manrope text-[8px] uppercase tracking-wider text-warm-gray-lt border border-white/10 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-[10px] text-warm-gray-lt hover:text-ivory transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-manrope text-[10px] text-warm-gray-lt hover:text-ivory transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
