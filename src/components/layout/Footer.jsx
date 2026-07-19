import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Logo } from "@/components/layout/Navbar";

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns & Exchanges" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/faq", label: "FAQ" },
      { to: "/contact", label: "Contact Us" },
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

function PaymentIcon({ label }) {
  return (
    <span className="inline-flex items-center justify-center h-7 w-10 border border-hairline/80 rounded-sm font-sans text-[10px] uppercase tracking-widest2 text-muted">
      {label}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso-300 text-cream-100 mt-24">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed text-cream-200/80 max-w-sm">
              Demi-fine gold jewelry, made for the everyday. Designed in
              California, hand-finished by artisans who care about every detail.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="h-9 w-9 inline-flex items-center justify-center border border-cream-200/20 rounded-full text-cream-100 hover:text-gold-300 hover:border-gold-300/50 transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="h-9 w-9 inline-flex items-center justify-center border border-cream-200/20 rounded-full text-cream-100 hover:text-gold-300 hover:border-gold-300/50 transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream-100/85 hover:text-gold-300 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-sans text-[11px] uppercase tracking-widest2 text-gold-300">
              Stay in touch
            </h4>
            <p className="mt-5 text-sm text-cream-100/80 leading-relaxed">
              New arrivals, styling notes, and the occasional 10% off.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-100/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] tracking-widest2 uppercase text-cream-200/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="PayPal" />
            <PaymentIcon label="Apple" />
            <PaymentIcon label="G Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
}
