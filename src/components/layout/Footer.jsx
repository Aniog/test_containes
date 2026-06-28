import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const SHOP_LINKS = [
  { to: "/shop?category=earrings", label: "Earrings" },
  { to: "/shop?category=necklaces", label: "Necklaces" },
  { to: "/shop?category=huggies", label: "Huggies" },
  { to: "/shop?category=sets", label: "Gift Sets" },
  { to: "/shop", label: "Shop All" },
];

const HELP_LINKS = [
  { to: "#", label: "Shipping" },
  { to: "#", label: "Returns" },
  { to: "#", label: "Care Guide" },
  { to: "#", label: "Contact" },
  { to: "#", label: "FAQ" },
];

const COMPANY_LINKS = [
  { to: "/about", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "#", label: "Sustainability" },
  { to: "#", label: "Press" },
];

function PaymentBadge({ children }) {
  return (
    <span className="inline-flex h-7 items-center justify-center rounded-sm border border-velmora-cream/15 bg-velmora-cream/5 px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-velmora-cream/70">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:px-16">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl tracking-[0.18em] text-velmora-cream">
              VELMORA
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-velmora-cream/65">
              Demi-fine gold jewelry, made to be treasured. Designed in small batches with recycled metals and hand-set stones.
            </p>
            <div className="mt-7 flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-velmora-cream/15 text-velmora-cream/80 transition-colors hover:border-velmora-gold hover:text-velmora-gold"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-velmora-cream/15 text-velmora-cream/80 transition-colors hover:border-velmora-gold hover:text-velmora-gold"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="flex h-9 w-9 items-center justify-center border border-velmora-cream/15 text-velmora-cream/80 transition-colors hover:border-velmora-gold hover:text-velmora-gold"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.28em] text-velmora-cream">
              Shop
            </h4>
            <ul className="mt-6 space-y-3">
              {SHOP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="link-underline text-[14px] text-velmora-cream/70 transition-colors hover:text-velmora-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.28em] text-velmora-cream">
              Help
            </h4>
            <ul className="mt-6 space-y-3">
              {HELP_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.to}
                    className="link-underline text-[14px] text-velmora-cream/70 transition-colors hover:text-velmora-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.28em] text-velmora-cream">
              Company
            </h4>
            <ul className="mt-6 space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="link-underline text-[14px] text-velmora-cream/70 transition-colors hover:text-velmora-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-velmora-cream/10" />

        <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-[12px] text-velmora-cream/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. Crafted with care.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentBadge>Visa</PaymentBadge>
            <PaymentBadge>Mastercard</PaymentBadge>
            <PaymentBadge>Amex</PaymentBadge>
            <PaymentBadge>Apple Pay</PaymentBadge>
            <PaymentBadge>PayPal</PaymentBadge>
            <PaymentBadge>Klarna</PaymentBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}
