import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const COLUMNS = [
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
      { label: "Shipping & Returns", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Care Instructions", to: "#" },
      { label: "Contact", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "Apple Pay", "PayPal"];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-bone/80">
      <div className="container-x py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif tracking-[0.32em] text-3xl text-bone font-medium"
            >
              VELMORA
            </Link>
            <p className="mt-6 text-small text-bone/60 max-w-sm leading-relaxed">
              Demi-fine jewelry, designed in small batches and made to be worn every day.
              Quiet pieces for a loud world.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 grid place-items-center border border-bone/20 hover:border-champagne hover:text-champagne transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-9 h-9 grid place-items-center border border-bone/20 hover:border-champagne hover:text-champagne transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-eyebrow uppercase text-bone font-medium mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-small text-bone/70 hover:text-bone transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-eyebrow uppercase text-bone font-medium mb-5">Studio</h3>
            <address className="not-italic text-small text-bone/70 leading-relaxed">
              Velmora Fine Jewelry
              <br />
              248 Mulberry Street
              <br />
              New York, NY 10012
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-eyebrow uppercase text-bone/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="text-[10px] uppercase tracking-[0.2em] text-bone/60 border border-bone/15 px-2 py-1"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <a href="#" className="text-eyebrow uppercase text-bone/50 hover:text-bone">
              Privacy
            </a>
            <a href="#" className="text-eyebrow uppercase text-bone/50 hover:text-bone">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
