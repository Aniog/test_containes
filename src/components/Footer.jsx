import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-20">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-semibold">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-stone leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces, designed to be treasured.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-velmora-stone hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-stone hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-stone hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-velmora-stone mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"].map((item) => (
                <li key={item}>
                  <Link
                    to="/collection"
                    className="text-sm text-velmora-sand hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-velmora-stone mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {["Shipping & Returns", "Size Guide", "Care Instructions", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-sand hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-velmora-stone mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Sustainability", "Press", "Careers", "Terms & Privacy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-sand hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "Amex", "PayPal"].map((brand) => (
              <span
                key={brand}
                className="text-[10px] font-semibold tracking-wider uppercase text-velmora-stone bg-white/10 px-2 py-1 rounded"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
