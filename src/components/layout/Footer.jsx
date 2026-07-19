import { Link } from "react-router-dom"
import { Instagram, Send } from "lucide-react"

const shopLinks = [
  { to: "/shop", label: "All Jewelry" },
  { to: "/shop?collection=earrings", label: "Earrings" },
  { to: "/shop?collection=necklaces", label: "Necklaces" },
  { to: "/shop?collection=huggies", label: "Huggies" },
  { to: "/shop?collection=sets", label: "Gift Sets" },
]

const helpLinks = [
  { to: "/help/shipping", label: "Shipping" },
  { to: "/help/returns", label: "Returns & Exchanges" },
  { to: "/help/care", label: "Materials & Care" },
  { to: "/help/size", label: "Size Guide" },
  { to: "/contact", label: "Contact" },
]

const companyLinks = [
  { to: "/about", label: "Our Story" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/journal", label: "Journal" },
  { to: "/stockists", label: "Stockists" },
  { to: "/press", label: "Press" },
]

const paymentMethods = ["Visa", "MC", "Amex", "PayPal", "Apple Pay", "Shop Pay"]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.32em]">
                VELMORA
              </span>
            </Link>
            <p className="mt-5 text-sm text-paper/70 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, made slowly by hand in our small Lisbon
              atelier. Designed to be worn — and treasured.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-paper/70 hover:text-gold transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="text-paper/70 hover:text-gold transition-colors"
              >
                <Send size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                aria-label="Pinterest"
                className="text-paper/70 hover:text-gold transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" />
                  <path d="M10 14l-1 6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-paper/60 mb-5">Shop</p>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-paper/85 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-paper/60 mb-5">Help</p>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-paper/85 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-paper/60 mb-5">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-paper/85 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-paper/60 mb-5">Visit</p>
            <p className="text-sm text-paper/85 leading-relaxed">
              Atelier Velmora
              <br />
              Rua das Flores 47
              <br />
              1200-194 Lisbon
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-paper/55 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {paymentMethods.map((method) => (
              <li
                key={method}
                className="text-[10px] uppercase tracking-eyebrow text-paper/70 border border-paper/20 px-2.5 py-1"
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
