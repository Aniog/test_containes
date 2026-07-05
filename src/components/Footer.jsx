import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, CreditCard, Banknote } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=sets" },
    { label: "Bestsellers", to: "/shop" },
  ],
  Help: [
    { label: "Shipping & Returns", to: "/shipping" },
    { label: "Size Guide", to: "/size-guide" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
    { label: "Track Order", to: "/track" },
  ],
  Company: [
    { label: "Our Story", to: "/about" },
    { label: "Journal", to: "/journal" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Press", to: "/press" },
    { label: "Careers", to: "/careers" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-100">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.15em] text-cream-50 font-medium inline-block mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              VELMORA
            </Link>
            <p className="text-body-sm text-charcoal-300 max-w-xs leading-relaxed mb-6">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — 
              accessible luxury that lasts.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-charcoal-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-overline uppercase text-cream-200 font-semibold mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-body-sm text-charcoal-400 hover:text-gold transition-colors duration-200"
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

      {/* Bottom bar */}
      <div className="border-t border-charcoal-700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-charcoal-500">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-charcoal-500">
            <CreditCard size={28} strokeWidth={1} />
            <Banknote size={28} strokeWidth={1} />
            <span className="text-caption">Visa · Mastercard · Amex · PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
