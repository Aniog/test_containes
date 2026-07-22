import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/journal" },
      { label: "Care Guide", to: "/journal" },
      { label: "Size Guide", to: "/journal" },
      { label: "Contact", to: "mailto:hello@velmora.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Press", to: "/journal" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo + manifesto */}
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-3xl tracking-[0.32em] text-cream">
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/70 font-serif italic">
              "Jewelry should be worn, not stored. Crafted to be lived in —
              quietly, daily, for years to come."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-cream/20 hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                className="p-2 border border-cream/20 hover:border-accent hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-widest-2 text-cream/50 font-sans font-medium">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith("mailto:") ? (
                      <a
                        href={link.to}
                        className="text-[14px] text-cream/85 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-[14px] text-cream/85 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] text-cream/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. Designed in California, crafted worldwide.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="text-[10px] uppercase tracking-widest-2 px-2.5 py-1 border border-cream/20 text-cream/70"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
