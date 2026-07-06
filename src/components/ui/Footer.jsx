import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const shopLinks = [
  { label: "All Jewelry", href: "/shop" },
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Huggies", href: "/shop?category=huggies" },
  { label: "Gift Sets", href: "/shop?category=sets" },
];

const helpLinks = [
  { label: "Shipping & Returns", href: "#" },
  { label: "Care Guide", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact Us", href: "#" },
];

const companyLinks = [
  { label: "Our Story", href: "/#story" },
  { label: "Journal", href: "/#journal" },
  { label: "Sustainability", href: "#" },
  { label: "Press", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-2xl uppercase tracking-widest"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine jewelry designed to be treasured. Hand-finished in
              18k gold plate, made for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-gold">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest text-cream/50">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest text-cream/50">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-widest text-cream/50">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
