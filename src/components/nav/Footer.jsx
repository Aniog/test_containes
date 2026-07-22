import { Link } from "react-router-dom";
import { Instagram, Facebook, Pinterest } from "lucide-react";

const shopLinks = [
  { label: "All Jewelry", href: "/shop" },
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Huggies", href: "/shop?category=huggies" },
  { label: "Gift Sets", href: "/shop?category=sets" },
];

const helpLinks = [
  { label: "Shipping & Returns", href: "/help/shipping" },
  { label: "Size Guide", href: "/help/sizing" },
  { label: "Care Instructions", href: "/help/care" },
  { label: "FAQ", href: "/help/faq" },
  { label: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-light tracking-[0.2em] uppercase text-cream block mb-4"
            >
              Velmora
            </Link>
            <p className="font-inter text-xs text-cream/50 leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the everyday woman.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/40 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/40 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-cream/40 hover:text-gold transition-colors">
                <Pinterest size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-cream/50 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-cream/50 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-cream/50 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[10px] text-cream/30 uppercase tracking-[0.1em]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {["Visa", "MC", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <div
                key={p}
                className="bg-cream/10 rounded-sm px-2 py-1 font-inter text-[8px] text-cream/40 uppercase tracking-wide"
              >
                {p}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-inter text-[10px] text-cream/30 hover:text-cream/60 transition-colors uppercase tracking-[0.1em]">
              Privacy
            </Link>
            <Link to="/terms" className="font-inter text-[10px] text-cream/30 hover:text-cream/60 transition-colors uppercase tracking-[0.1em]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
