import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?collection=earrings", label: "Earrings" },
      { to: "/shop?collection=necklaces", label: "Necklaces" },
      { to: "/shop?collection=huggies", label: "Huggies" },
      { to: "/shop?collection=gifts", label: "Gifting" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Materials & Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "Apple Pay", "PayPal"];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.32em] font-light text-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm font-serif text-[15px] italic leading-relaxed text-cream/70">
              Demi-fine jewelry, made to be worn everyday and treasured for years.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-cream/70 transition-colors duration-300 hover:text-gold-soft"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.25} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email us"
                className="text-cream/70 transition-colors duration-300 hover:text-gold-soft"
              >
                <Mail className="h-5 w-5" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-3 md:gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold-soft">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="font-sans text-[13px] text-cream/75 transition-colors duration-300 hover:text-cream"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-6 border-t border-cream/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-cream/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {PAYMENT_METHODS.map((m) => (
              <li
                key={m}
                className="font-sans text-[10px] tracking-[0.32em] uppercase text-cream/55"
              >
                {m}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <Link
              to="/legal/privacy"
              className="font-sans text-[11px] tracking-[0.22em] uppercase text-cream/55 transition-colors duration-300 hover:text-cream"
            >
              Privacy
            </Link>
            <Link
              to="/legal/terms"
              className="font-sans text-[11px] tracking-[0.22em] uppercase text-cream/55 transition-colors duration-300 hover:text-cream"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
