import { Link } from "react-router-dom";
import { Instagram, Mail, Twitter, Facebook } from "lucide-react";

const COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "Earrings",  to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies",   to: "/shop?category=earrings" },
      { label: "Sets",      to: "/shop?category=sets" },
      { label: "Gift Card", to: "/shop" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Shipping",    to: "#" },
      { label: "Returns",     to: "#" },
      { label: "Care Guide",  to: "#" },
      { label: "Size Guide",  to: "#" },
      { label: "Contact",     to: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story",  to: "/about" },
      { label: "Journal",    to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Press",      to: "/about" },
      { label: "Careers",    to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-bone-100">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl tracking-[0.04em] text-bone-50">
              VELMORA
            </div>
            <p className="mt-5 text-sm text-bone-100/65 max-w-xs leading-relaxed">
              Demi-fine jewelry, made to live with you. Designed in small batches,
              finished by hand, worn for a lifetime.
            </p>
            <div className="mt-8 flex items-center gap-4 text-bone-100/70">
              <a href="#" aria-label="Instagram" className="hover:text-bone-50 transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-bone-50 transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-bone-50 transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:hello@velmora.com" aria-label="Email" className="hover:text-bone-50 transition-colors">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[11px] uppercase tracking-widest2 text-bone-50/80 font-medium">
                {col.heading}
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-bone-100/65">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="hover:text-bone-50 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-bone-100/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[12px] text-bone-100/55 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-bone-100/55">
            <PaymentBadge label="VISA" />
            <PaymentBadge label="MC" />
            <PaymentBadge label="AMEX" />
            <PaymentBadge label="PAYPAL" />
            <PaymentBadge label="APPLE" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function PaymentBadge({ label }) {
  return (
    <span
      className="inline-flex items-center justify-center text-[9px] font-medium tracking-widest2
                 border border-bone-100/25 rounded-sm h-6 min-w-[42px] px-1.5 text-bone-100/70"
    >
      {label}
    </span>
  );
}
