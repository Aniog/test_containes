import { Link } from "react-router-dom";
import { Instagram, Send } from "lucide-react";

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
      { label: "Shipping", to: "#" },
      { label: "Returns & Exchanges", to: "#" },
      { label: "Care Guide", to: "#" },
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

const PAYMENTS = ["Visa", "Mastercard", "Amex", "Apple Pay", "PayPal", "Klarna"];

export default function Footer() {
  return (
    <footer className="bg-espresso text-bone">
      <div className="container-shell py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-display text-3xl tracking-wider-2 text-bone"
            >
              VELMORA
            </Link>
            <p className="mt-6 text-bone-soft text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry, hand-finished in our atelier. Crafted to be
              worn daily, and treasured for a lifetime.
            </p>

            <form
              className="mt-8 flex border-b border-bone/20 focus-within:border-champagne transition-colors duration-300"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 bg-transparent text-bone placeholder:text-bone-soft/70 text-sm py-3 outline-none"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-3 text-bone-soft hover:text-champagne transition-colors duration-300"
              >
                <Send className="w-4 h-4" strokeWidth={1.25} />
              </button>
            </form>
            <p className="mt-4 text-[10px] tracking-wider-3 uppercase text-bone-soft/70">
              Get 10% off your first order
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="text-bone-soft hover:text-champagne transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Pinterest"
                className="text-bone-soft hover:text-champagne transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.4 7.6 11.2-.1-.9-.2-2.4 0-3.5.2-.9 1.4-5.8 1.4-5.8s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.2.9 2.8.1.1.1.2.1.3l-.3 1.4c-.1.2-.2.3-.4.2-1.4-.7-2.3-2.7-2.3-4.4 0-3.6 2.6-6.9 7.5-6.9 3.9 0 7 2.8 7 6.5 0 3.9-2.5 7-5.9 7-1.2 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.4 3 1.1.3 2.2.5 3.4.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TikTok"
                className="text-bone-soft hover:text-champagne transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.3c-1.5 0-2.9-.5-4-1.5v8.5c0 3.6-2.9 6.5-6.5 6.5S2.6 16.9 2.6 13.3s2.9-6.5 6.5-6.5c.4 0 .7 0 1.1.1v3.3c-.3-.1-.7-.2-1.1-.2-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2V0h3.3c0 .2 0 .4.1.6.3 1.7 1.6 3 3.3 3.3.2 0 .4.1.6.1v3.3z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] tracking-wider-3 uppercase text-bone-soft mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-bone hover:text-champagne transition-colors duration-300"
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

        <div className="mt-16 md:mt-20 pt-8 border-t border-bone/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[10px] tracking-wider-3 uppercase text-bone-soft">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[9px] tracking-wider-2 uppercase text-bone-soft/80 border border-bone/15 px-2 py-1"
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
