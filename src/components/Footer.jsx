import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in New York, worn worldwide.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-cream/70 hover:text-cream transition-colors font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream/40 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {["Shipping & Returns", "Care Guide", "Size Guide", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Sustainability", "Press", "Careers", "Terms & Privacy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="text-[10px] font-sans font-medium tracking-wider uppercase px-2 py-1 border border-cream/20 text-cream/50"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
