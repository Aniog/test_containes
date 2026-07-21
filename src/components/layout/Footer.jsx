import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop?cat=gifts", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "30-Day Returns" },
      { to: "/help/care", label: "Materials & Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/help/contact", label: "Contact Us" },
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

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-editorial px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <Link to="/" className="font-display text-2xl tracking-[0.28em] text-cream">
              VELMORA
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed max-w-sm">
              Demi-fine gold jewelry, designed in-house and crafted to be treasured — from the everyday to the once-in-a-lifetime.
            </p>
            <div className="flex items-center gap-4 text-cream/70 mt-2">
              <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-champagne transition-colors">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-[0.7rem] text-champagne mb-5">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-cream/75 hover:text-cream transition-colors"
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

        <div className="hairline-dark mt-14" />

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.18em] font-medium text-cream/65 border border-cream/15 rounded-sm px-2 py-1"
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
