import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Jewelry", to: "/shop" },
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=necklaces" },
  ],
  Help: [
    { label: "Shipping & Returns", to: "/#" },
    { label: "Size Guide", to: "/#" },
    { label: "Care Instructions", to: "/#" },
    { label: "FAQ", to: "/#" },
    { label: "Contact Us", to: "/#" },
  ],
  Company: [
    { label: "Our Story", to: "/#story" },
    { label: "Sustainability", to: "/#" },
    { label: "Press", to: "/#" },
    { label: "Affiliates", to: "/#" },
    { label: "Journal", to: "/#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-ivory">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-warm-gray-light mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-warm-gray-light hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-warm-gray-light hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-[11px] tracking-widest uppercase text-warm-gray-light mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-xs text-ivory/70 hover:text-gold transition-colors"
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
      <div className="border-t border-obsidian-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-warm-gray">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="font-sans text-[10px] text-warm-gray border border-obsidian-light px-2 py-0.5 rounded-sm"
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
