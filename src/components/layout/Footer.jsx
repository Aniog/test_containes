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
    { label: "Shipping & Returns", href: "#" },
    { label: "Care Guide", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Sustainability", href: "#" },
    { label: "Wholesale", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-velmora-fg py-16 text-velmora-cream">
      <div className="container-velmora">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-5">
            <Link to="/" className="inline-block font-serif text-2xl tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-velmora-border">
              Demi-fine jewelry designed to be treasured. Thoughtfully crafted in small batches.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-velmora-border hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-border hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-border hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-widest text-velmora-gold">Shop</h4>
            <ul className="space-y-3 text-sm text-velmora-border">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-widest text-velmora-gold">Help</h4>
            <ul className="space-y-3 text-sm text-velmora-border">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-widest text-velmora-gold">Company</h4>
            <ul className="space-y-3 text-sm text-velmora-border">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-velmora-border">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-border">
            <span className="rounded border border-white/10 px-2 py-1">Visa</span>
            <span className="rounded border border-white/10 px-2 py-1">Mastercard</span>
            <span className="rounded border border-white/10 px-2 py-1">Amex</span>
            <span className="rounded border border-white/10 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
