import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest font-medium"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in small
              batches with care, intention, and timeless appeal.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-cream/40 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream/70 hover:text-gold transition-colors"
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
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-cream/40 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
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
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-cream/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Sustainability", "Journal", "Careers", "Press"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
