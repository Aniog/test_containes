import { Link } from "react-router-dom";
import { Instagram, Facebook, Globe, Twitter } from "lucide-react";

const paymentIcons = [
  "Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Klarna"
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl text-white tracking-[0.15em] font-semibold"
            >
              VELMORA
            </Link>
            <p className="text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Elevated everyday
              pieces designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Pinterest">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.1em] font-medium mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets", "Sale"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.1em] font-medium mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {["Shipping & Delivery", "Returns & Exchanges", "FAQ", "Size Guide", "Track Order", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.1em] font-medium mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Sustainability", "Careers", "Press", "Journal"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs uppercase tracking-[0.08em] text-footer-text/60">
              We accept
            </span>
            <div className="flex flex-wrap gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs bg-white/5 px-3 py-1.5 rounded text-footer-text"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-footer-text/60">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}