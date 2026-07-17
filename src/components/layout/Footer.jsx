import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "All Jewelry", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Size Guide", to: "/about" },
      { label: "Contact", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="max-w-editorial mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="font-serif text-[28px] tracking-[0.32em] text-cream"
            >
              VELMORA
            </Link>
            <p
              id="footer-tagline"
              className="mt-6 text-cream-200/70 max-w-sm leading-relaxed text-[15px]"
            >
              Demi-fine jewelry in 18K gold plating. Crafted to be worn every
              day, designed to be treasured.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream-200/70 hover:text-gold transition-colors"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-cream-200/70 hover:text-gold transition-colors"
              >
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-gold mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-cream-200/80 hover:text-cream transition-colors"
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

        <div className="divider-hairline-dark my-12" />

        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[12px] text-cream-200/60 tracking-wide">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.2em] text-cream-200/70 border border-cream-200/20 px-2.5 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
