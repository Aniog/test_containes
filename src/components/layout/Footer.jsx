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
      { label: "Contact Us", to: "/help" },
      { label: "Shipping & Returns", to: "/help#shipping" },
      { label: "Care Guide", to: "/help#care" },
      { label: "Size Guide", to: "/help#size" },
      { label: "FAQ", to: "/help#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Sustainability", to: "/about#sustainability" },
      { label: "The Journal", to: "/journal" },
      { label: "Press", to: "/about#press" },
      { label: "Careers", to: "/about#careers" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"];

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-20">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.22em] inline-block"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-sm text-ivory/65 max-w-sm leading-relaxed">
              Demi-fine jewelry, designed in our atelier and made to be worn —
              layered, gifted, and treasured through every ordinary, beautiful day.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="p-2 -ml-2 text-ivory/70 hover:text-ivory transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email us"
                className="p-2 -ml-2 text-ivory/70 hover:text-ivory transition-colors"
              >
                <Mail className="w-5 h-5" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[0.7rem] uppercase tracking-[0.28em] text-ivory/55 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/85 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[0.7rem] uppercase tracking-[0.28em] text-ivory/55 mb-5">
              Contact
            </h4>
            <p className="text-sm text-ivory/85 leading-relaxed">
              14 Cedar Lane
              <br />
              Brooklyn, NY 11201
            </p>
            <a
              href="mailto:hello@velmora.com"
              className="text-sm text-ivory/85 hover:text-ivory transition-colors mt-3 inline-block"
            >
              hello@velmora.com
            </a>
          </div>
        </div>

        {/* Hairline */}
        <div className="hairline bg-ivory/15 my-12" />

        {/* Bottom: copyright + payments */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-ivory/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="text-[0.65rem] uppercase tracking-[0.22em] text-ivory/60 border border-ivory/15 px-2.5 py-1.5"
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
