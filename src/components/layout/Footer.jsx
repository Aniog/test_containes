import { Link } from "react-router-dom"
import { Instagram, Mail, ArrowUpRight } from "lucide-react"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Sets" },
      { to: "/shop", label: "All Jewelry" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/sizing", label: "Size Guide" },
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
]

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"]

export default function Footer() {
  return (
    <footer className="bg-base border-t border-line mt-24 md:mt-32">
      <div className="container-site py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.04em] text-ink-primary"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-ink-secondary text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry in 18K gold plating, made to be worn every day
              and kept forever.
            </p>

            <form
              className="mt-8 flex max-w-sm"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="input-base flex-1"
                required
              />
              <button
                type="submit"
                className="px-5 bg-accent text-ink-onAccent hover:bg-accent-light transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </form>

            <div className="mt-8 flex items-center gap-5 text-ink-secondary">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                className="hover:text-accent transition-colors duration-300"
                aria-label="Email Velmora"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans text-[11px] uppercase tracking-eyebrow text-ink-muted">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-300"
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

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-ink-muted">
          <div>
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>We accept</span>
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="px-2 py-1 border border-line-strong text-[10px] tracking-wider2 uppercase text-ink-secondary"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
