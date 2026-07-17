import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const COLUMNS = [
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
      { label: "Shipping & Delivery", to: "/journal" },
      { label: "Returns & Exchanges", to: "/journal" },
      { label: "Jewelry Care", to: "/about" },
      { label: "Size Guide", to: "/journal" },
      { label: "Contact Us", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Materials", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "G PAY"];

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-medium uppercase tracking-[0.3em] transition-colors hover:text-bronze"
            >
              Velmora
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Demi-fine jewelry in 18k gold, crafted to be treasured — and priced to be
              worn every day.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/70 transition-all duration-300 hover:border-bronze hover:text-bronze"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-luxe text-bronze">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-cream/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2" aria-label="Accepted payments">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="border border-cream/15 px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] text-cream/60"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-[11px] tracking-widest text-cream/40">
            © {new Date().getFullYear()} Velmora Fine Jewelry · Crafted to be Treasured
          </p>
        </div>
      </div>
    </footer>
  );
}
