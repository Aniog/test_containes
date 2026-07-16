import { Link } from "react-router-dom";
import { Instagram, Youtube, Share2 } from "lucide-react";

const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop" },
      { label: "Necklaces", to: "/shop" },
      { label: "Huggies", to: "/shop" },
      { label: "Gift Sets", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Delivery", to: "/" },
      { label: "Returns & Exchanges", to: "/" },
      { label: "FAQ", to: "/" },
      { label: "Track Order", to: "/" },
      { label: "Contact Us", to: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/" },
      { label: "Journal", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Sustainability", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-text text-velmora-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + social */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-wide text-velmora-bg"
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm text-velmora-border/70 mt-4 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Made for the
              modern woman who values quality, elegance, and timeless design.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-velmora-border/70 hover:text-velmora-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-velmora-border/70 hover:text-velmora-gold transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-velmora-border/70 hover:text-velmora-gold transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-bg mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-velmora-border/70 hover:text-velmora-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-velmora-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-velmora-border/50">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            <div className="flex items-center gap-2 text-velmora-border/50">
              <span className="font-sans text-xs">Visa</span>
              <span className="w-px h-3 bg-velmora-border/20" />
              <span className="font-sans text-xs">MC</span>
              <span className="w-px h-3 bg-velmora-border/20" />
              <span className="font-sans text-xs">Amex</span>
              <span className="w-px h-3 bg-velmora-border/20" />
              <span className="font-sans text-xs">PayPal</span>
              <span className="w-px h-3 bg-velmora-border/20" />
              <span className="font-sans text-xs">Afterpay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}