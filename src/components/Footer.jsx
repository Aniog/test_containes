import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=earrings" },
    { label: "Necklaces", href: "/shop?category=necklaces" },
    { label: "Huggies", href: "/shop?category=huggies" },
    { label: "Gift Sets", href: "/shop?category=sets" },
  ],
  help: [
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Care Guide", href: "/care" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Stockists", href: "/stockists" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl uppercase tracking-[0.25em] block mb-4">
              Velmora
            </Link>
            <p className="text-sm text-stone leading-relaxed max-w-xs">
              Demi-fine jewelry designed for everyday luxury. Crafted to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-stone hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-stone hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-stone hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "Amex", "PayPal"].map((brand) => (
              <div
                key={brand}
                className="px-2 py-1 border border-white/10 text-[10px] uppercase tracking-wider text-stone"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
