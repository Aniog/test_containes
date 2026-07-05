import { Link } from "react-router-dom";
import { Instagram, Twitter, ExternalLink, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", path: "/shop" },
      { label: "Earrings", path: "/shop?category=earrings" },
      { label: "Necklaces", path: "/shop?category=necklaces" },
      { label: "Huggies", path: "/shop?category=huggies" },
      { label: "Gift Sets", path: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Delivery", path: "/shipping" },
      { label: "Returns & Exchanges", path: "/returns" },
      { label: "FAQs", path: "/faqs" },
      { label: "Track Order", path: "/track" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our Story", path: "/about" },
      { label: "Journal", path: "/journal" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[#2a2a2a]">
      <div className="max-w-page mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-wider text-primary hover:text-accent transition-colors"
            >
              VELMORA
            </Link>
            <p className="text-sm text-secondary mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Each piece is
              designed to be treasured — and worn every day.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-secondary hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-accent transition-colors"
                aria-label="Pinterest"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-accent transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-wider uppercase text-primary font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-secondary hover:text-primary transition-colors"
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
        <div className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            <div className="flex items-center gap-2">
              {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                <span
                  key={method}
                  className="text-[10px] text-[#555] border border-[#2a2a2a] px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}