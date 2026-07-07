import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter, CreditCard } from "lucide-react"

const shopLinks = [
  { label: "All Jewelry", href: "/shop" },
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Huggies", href: "/shop?category=huggies" },
]

const helpLinks = [
  { label: "Shipping & Returns", href: "/#" },
  { label: "Care Guide", href: "/#" },
  { label: "FAQ", href: "/#" },
  { label: "Contact Us", href: "/#" },
]

const companyLinks = [
  { label: "Our Story", href: "/#story" },
  { label: "Sustainability", href: "/#" },
  { label: "Careers", href: "/#" },
  { label: "Press", href: "/#" },
]

export default function Footer() {
  return (
    <footer className="border-t border-gold-muted bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold uppercase tracking-[0.18em] text-ink"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              Demi-fine jewelry for women who treasure the everyday. Designed with intention,
              finished in 18k gold.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-ink transition-colors hover:text-gold-dark"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-ink transition-colors hover:text-gold-dark"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-ink transition-colors hover:text-gold-dark"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
              Shop
            </h4>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-stone transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
              Help
            </h4>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-stone transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-stone transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold-muted pt-8 md:flex-row">
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-stone">
            <CreditCard size={20} aria-label="Credit card" />
            <span className="text-xs uppercase tracking-wider">Visa · Mastercard · Amex · PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
