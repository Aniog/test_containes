import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const columns = [
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
      { label: "Care Guide", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "Contact", to: "/help/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#materials" },
      { label: "Press", to: "/about#press" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "Apple Pay", "PayPal"];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink-300 text-cream-100">
      <div className="mx-auto max-w-editorial px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] text-cream-100"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
              Demi-fine gold jewelry, made to be lived in and loved for years.
              Designed in Copenhagen. Crafted by hand.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/80 transition-colors duration-300 hover:border-gold-300 hover:text-gold-300"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:care@velmora.com"
                aria-label="Email us"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/80 transition-colors duration-300 hover:border-gold-300 hover:text-gold-300"
              >
                <Mail className="h-4 w-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-12">
              {columns.map((col) => (
                <div key={col.title}>
                  <p className="eyebrow text-cream-100/60">{col.title}</p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-sm text-cream-100/85 link-underline transition-colors hover:text-gold-300"
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
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-cream-100/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cream-100/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {paymentMethods.map((method) => (
              <li
                key={method}
                className="rounded-sm border border-cream-100/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-cream-100/60"
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
