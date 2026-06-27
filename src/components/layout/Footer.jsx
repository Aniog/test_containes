import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const shopLinks = [
    { label: "All Jewelry", to: "/shop" },
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=gifts" },
  ];

  const helpLinks = [
    { label: "Shipping & Returns", to: "/shipping" },
    { label: "Size Guide", to: "/size-guide" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Track Order", to: "/track" },
  ];

  const companyLinks = [
    { label: "Our Story", to: "/about" },
    { label: "Journal", to: "/journal" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Press", to: "/press" },
    { label: "Careers", to: "/careers" },
  ];

  return (
    <footer className="bg-velmora-surface border-t border-velmora-border">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-text-secondary leading-relaxed max-w-xs">
              Crafted for the modern woman. Demi-fine gold jewelry designed to be treasured, 
              at prices that invite you to treat yourself.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-text-secondary hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-text-secondary hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-text-secondary hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-velmora-gold font-medium mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-velmora-text-secondary hover:text-velmora-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-velmora-gold font-medium mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-velmora-text-secondary hover:text-velmora-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-velmora-gold font-medium mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-velmora-text-secondary hover:text-velmora-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-border mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-text-secondary">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((name) => (
              <span
                key={name}
                className="px-2.5 py-1 border border-velmora-border rounded text-[10px] text-velmora-text-secondary tracking-wide uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
