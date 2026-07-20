import { Link } from "react-router-dom";
import { Instagram, Facebook, Heart } from "lucide-react";

const shopLinks = [
  { label: "Earrings", to: "/shop?category=earrings" },
  { label: "Necklaces", to: "/shop?category=necklaces" },
  { label: "Huggies", to: "/shop?category=huggies" },
  { label: "Gift Sets", to: "/shop?category=sets" },
  { label: "New Arrivals", to: "/shop" },
];

const helpLinks = [
  { label: "Shipping & Returns", to: "/help" },
  { label: "Size Guide", to: "/help" },
  { label: "Care Instructions", to: "/help" },
  { label: "FAQ", to: "/help" },
  { label: "Contact Us", to: "/contact" },
];

const companyLinks = [
  { label: "Our Story", to: "/about" },
  { label: "Sustainability", to: "/about" },
  { label: "Press", to: "/press" },
  { label: "Careers", to: "/careers" },
  { label: "Journal", to: "/journal" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest2 text-ivory block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-ivory/50 text-sm leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the woman who wears her worth every day.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-champagne transition-colors">
                <Heart size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs text-champagne tracking-widest uppercase mb-5">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs text-champagne tracking-widest uppercase mb-5">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs text-champagne tracking-widest uppercase mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-obsidian-mid mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {["Visa", "MC", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="font-sans text-[10px] text-ivory/30 border border-obsidian-mid px-2 py-0.5 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-5">
            <Link to="/privacy" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
