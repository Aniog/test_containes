import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl tracking-widester block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who values quiet luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widester uppercase font-medium mb-5 text-white/40">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/shop?cat=${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widester uppercase font-medium mb-5 text-white/40">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {["Shipping & Returns", "Size Guide", "Care Instructions", "FAQ", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widester uppercase font-medium mb-5 text-white/40">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["Our Story", "Sustainability", "Journal", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline bg-white/10 mt-14 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "Amex", "PayPal"].map((pm) => (
              <span
                key={pm}
                className="px-2 py-1 border border-white/20 rounded text-[10px] text-white/50 tracking-wide"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
