import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import Logo from "@/components/layout/Logo";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=earrings" },
      { label: "New Arrivals", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns & Exchanges", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Sizing", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Materials", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Reviews", to: "#" },
      { label: "Privacy", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-7xl py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <Logo light />
            <p className="mt-5 text-sm text-ivory/70 max-w-xs leading-relaxed">
              Demi-fine gold jewelry, crafted to be lived in. Designed in small
              batches, made to last.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory/70 hover:text-gold-soft transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email us"
                className="text-ivory/70 hover:text-gold-soft transition-colors"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="eyebrow text-gold-soft mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/80 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="eyebrow text-gold-soft mb-5">Studio</h4>
            <p className="text-sm text-ivory/80 leading-relaxed">
              hello@velmora.com
              <br />
              Mon–Fri, 9am–5pm PT
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ivory/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-3 text-ivory/60 text-[10px] uppercase tracking-eyebrow font-medium">
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"].map(
              (p) => (
                <li
                  key={p}
                  className="px-2.5 py-1 border border-ivory/15 rounded-sm"
                >
                  {p}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
