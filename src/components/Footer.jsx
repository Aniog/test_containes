import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest font-medium text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in Los
              Angeles, worn worldwide.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-taupe hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-taupe hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-taupe hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-gold mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {["Earrings", "Necklaces", "Huggies", "Sets", "New Arrivals"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-taupe hover:text-ivory transition-colors"
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
            <h4 className="text-xs font-medium uppercase tracking-widest text-gold mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Shipping & Returns",
                "Size Guide",
                "Care Instructions",
                "FAQ",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-taupe hover:text-ivory transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-gold mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["Our Story", "Sustainability", "Careers", "Press"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-taupe hover:text-ivory transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-taupe/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "Amex", "PayPal"].map((method) => (
              <span
                key={method}
                className="text-[10px] uppercase tracking-wider text-taupe border border-taupe/30 px-2 py-1"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
