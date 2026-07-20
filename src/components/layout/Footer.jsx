import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Jewelry", to: "/shop" },
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=sets" },
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
    { label: "Careers", to: "/#" },
    { label: "Privacy Policy", to: "/#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-obsidian-soft">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl text-gold-light tracking-widest2 mb-4">VELMORA</p>
            <p className="font-sans text-xs text-taupe-light leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-taupe-light hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-taupe-light hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-taupe-light hover:text-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p className="font-sans text-xs uppercase tracking-widest text-ivory font-medium mb-4">
                {col}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-xs text-taupe-light hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-taupe order-2 md:order-1">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons (text-based) */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="font-sans text-[10px] text-taupe border border-obsidian-soft px-2 py-1 rounded-sm"
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
