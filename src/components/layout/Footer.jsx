import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const shopLinks = ["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"];
const helpLinks = ["Shipping & Returns", "Size Guide", "Care Instructions", "FAQ", "Contact Us"];
const companyLinks = ["Our Story", "Sustainability", "Press", "Careers", "Journal"];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl tracking-[0.2em] font-medium text-white"
            >
              VELMORA
            </Link>
            <p className="font-inter text-xs text-white/60 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be
              treasured, worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-white/40 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="font-inter text-xs text-white/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-white/40 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-inter text-xs text-white/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-inter text-xs text-white/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((brand) => (
              <div
                key={brand}
                className="px-2 py-1 border border-white/20 rounded-sm"
              >
                <span className="font-inter text-[9px] text-white/50 tracking-wider">
                  {brand}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-inter text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
