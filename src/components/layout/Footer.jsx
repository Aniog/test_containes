import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    heading: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Gift Sets" },
    ],
  },
  {
    heading: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "30-Day Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/help/contact", label: "Contact Us" },
    ],
  },
  {
    heading: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "The Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/wholesale", label: "Wholesale" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"];

export function Footer() {
  return (
    <footer className="bg-ink-deep text-ink-inverse">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-serif text-3xl tracking-[0.32em]">VELMORA</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-inverse/70">
              Demi-fine jewelry, hand-finished in 18K gold plate. Designed in a small studio, worn by women who notice the details.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Velmora on Instagram"
                className="grid h-9 w-9 place-items-center border border-hairlineDark text-ink-inverse/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Velmora on Facebook"
                className="grid h-9 w-9 place-items-center border border-hairlineDark text-ink-inverse/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Velmora on YouTube"
                className="grid h-9 w-9 place-items-center border border-hairlineDark text-ink-inverse/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 md:col-span-8 md:grid-cols-3 md:gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[0.75rem] font-medium uppercase tracking-[0.22em] text-gold-soft">
                  {col.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-ink-inverse/75 transition-colors hover:text-gold-soft"
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

        {/* Hairline + bottom row */}
        <div className="mt-14 border-t border-hairlineDark pt-6">
          <div className="flex flex-col items-start gap-4 text-xs text-ink-inverse/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {paymentMethods.map((m) => (
                <li
                  key={m}
                  className="rounded-sm border border-hairlineDark px-2 py-1 text-[0.625rem] uppercase tracking-[0.18em] text-ink-inverse/55"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
