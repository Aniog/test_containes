import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const shopLinks = [
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop" },
    { label: "Bestsellers", to: "/shop" },
  ];

  const helpLinks = [
    { label: "Shipping & Returns", to: "#" },
    { label: "Size Guide", to: "#" },
    { label: "FAQ", to: "#" },
    { label: "Contact Us", to: "#" },
    { label: "Track Order", to: "#" },
  ];

  const companyLinks = [
    { label: "Our Story", to: "#about" },
    { label: "Sustainability", to: "#" },
    { label: "Journal", to: "#journal" },
    { label: "Press", to: "#" },
    { label: "Careers", to: "#" },
  ];

  return (
    <footer className="bg-espresso text-warm-100">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide text-white block mb-5">
              VELMORA
            </Link>
            <p className="text-warm-300 text-sm leading-relaxed max-w-xs mb-6">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman
              — premium quality at accessible prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-warm-300 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-warm-300 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-warm-300 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans font-semibold text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-warm-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans font-semibold text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-warm-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans font-semibold text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-warm-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-400">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* Payment icons */}
            <div className="flex items-center gap-3 opacity-60">
              <svg viewBox="0 0 38 24" className="h-6" aria-label="Visa">
                <rect width="38" height="24" rx="4" fill="#1A1F71"/>
                <text x="8" y="16" fill="white" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="bold">VISA</text>
              </svg>
              <svg viewBox="0 0 38 24" className="h-6" aria-label="Mastercard">
                <rect width="38" height="24" rx="4" fill="#252525"/>
                <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
              </svg>
              <svg viewBox="0 0 38 24" className="h-6" aria-label="Amex">
                <rect width="38" height="24" rx="4" fill="#006FCF"/>
                <text x="5" y="15" fill="white" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="bold">AMEX</text>
              </svg>
              <svg viewBox="0 0 38 24" className="h-6" aria-label="PayPal">
                <rect width="38" height="24" rx="4" fill="#FFC43A"/>
                <text x="4" y="15" fill="#253B80" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="bold">PayPal</text>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-warm-400 hover:text-warm-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-warm-400 hover:text-warm-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
