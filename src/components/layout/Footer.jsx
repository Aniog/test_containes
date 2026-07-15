import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=earrings" },
    { label: "Necklaces", href: "/shop?category=necklaces" },
    { label: "Huggies", href: "/shop?category=huggies" },
    { label: "Gift Sets", href: "/shop?category=sets" },
  ],
  Help: [
    { label: "Shipping & Returns", href: "#" },
    { label: "Care Guide", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Sustainability", href: "#" },
    { label: "Journal", href: "/journal" },
    { label: "Press", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-velmora-sand bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.12em] uppercase text-velmora-ink"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-velmora-taupe">
              Demi-fine gold jewelry designed for everyday luxury and moments worth
              remembering.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-velmora-ink hover:text-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-ink hover:text-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-ink hover:text-velmora-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 md:col-span-8 md:pl-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-ink">
                  {title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-velmora-sand pt-8 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-taupe">
            <span className="rounded border border-velmora-sand px-2 py-1">Visa</span>
            <span className="rounded border border-velmora-sand px-2 py-1">MC</span>
            <span className="rounded border border-velmora-sand px-2 py-1">Amex</span>
            <span className="rounded border border-velmora-sand px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
