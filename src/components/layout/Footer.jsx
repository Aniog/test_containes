import { Link } from "react-router-dom";
import { Instagram, Heart, Globe } from "lucide-react";

const footerColumns = {
  Shop: [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=earrings" },
    { label: "Necklaces", href: "/shop?category=necklaces" },
    { label: "Huggies", href: "/shop?category=huggies" },
    { label: "Gift Sets", href: "/shop?category=sets" },
  ],
  Help: [
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "FAQ", href: "/faq" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Care Instructions", href: "/care" },
    { label: "Contact Us", href: "/contact" },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
};

const paymentIcons = [
  "Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"
];

export default function Footer() {
  return (
    <footer className="bg-velmora-text text-velmora-text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-widest">
              VELMORA
            </Link>
            <p className="text-velmora-muted text-sm mt-3 leading-relaxed">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <Heart className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-widest uppercase text-velmora-gold mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-velmora-muted hover:text-velmora-text-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-muted/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-velmora-muted uppercase tracking-wider">We Accept</span>
              <div className="flex gap-2">
                {paymentIcons.map((icon) => (
                  <span
                    key={icon}
                    className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-velmora-muted"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-velmora-muted">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}