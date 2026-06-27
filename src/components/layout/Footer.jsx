import { Link } from "react-router-dom";
import { Instagram, Music2, Youtube } from "lucide-react";

const COLS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Jewelry Care", to: "/help/care" },
      { label: "Sizing Guide", to: "/help/sizing" },
      { label: "Contact Us", to: "/help/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#sustainability" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/press" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.35em] font-light"
            >
              VELMORA
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-cream/70 max-w-xs">
              Demi-fine gold jewelry, crafted in small batches and made to be
              worn every day, forever.
            </p>
            <div className="flex items-center gap-4 mt-8 text-cream/70">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-gold transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="hover:text-gold transition-colors"
              >
                <Music2 size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-gold transition-colors"
              >
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3 text-sm text-cream/80">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="hover:text-cream transition-colors"
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

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-cream/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-cream/60">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((label) => (
              <span
                key={label}
                className="text-[10px] tracking-[0.18em] border border-cream/20 px-2.5 py-1.5 rounded-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
