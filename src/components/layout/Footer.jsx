import { Link } from "react-router-dom"
import { CreditCard, Instagram, Youtube } from "lucide-react"
import { CATEGORIES } from "@/data/products"

const HELP_LINKS = ["Shipping & Delivery", "Returns & Exchanges", "Ring Size Guide", "Care Instructions", "FAQ"]
const COMPANY_LINKS = [
  { label: "Our Story", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "Sustainability", to: "/about" },
  { label: "Wholesale", to: "/about" },
  { label: "Contact", to: "/about" },
]

function PinterestIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.46 7.58 5.99 9.13-.08-.78-.16-1.98.03-2.83l1.2-5.08s-.3-.61-.3-1.51c0-1.42.82-2.48 1.85-2.48.87 0 1.29.65 1.29 1.44 0 .88-.56 2.19-.85 3.41-.24 1.02.51 1.85 1.52 1.85 1.82 0 3.22-1.92 3.22-4.69 0-2.45-1.76-4.16-4.28-4.16-2.91 0-4.63 2.19-4.63 4.45 0 .88.34 1.83.77 2.34.08.1.1.19.07.29l-.28 1.17c-.05.19-.15.23-.35.14-1.31-.61-2.13-2.53-2.13-4.07 0-3.31 2.41-6.35 6.94-6.35 3.64 0 6.48 2.6 6.48 6.07 0 3.62-2.28 6.53-5.45 6.53-1.06 0-2.06-.55-2.4-1.2l-.65 2.49c-.24.91-.88 2.06-1.31 2.76.98.3 2.03.47 3.11.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <Link to="/" className="font-serif text-3xl font-medium uppercase tracking-[0.3em] text-ivory">
              Velmora
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Demi-fine jewelry crafted in small batches — 18K gold plated, hypoallergenic, and made to be treasured for years, not seasons.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: PinterestIcon, label: "Pinterest" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-bronze-light hover:text-bronze-light"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/80">Shop</h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-ivory/60 transition-colors hover:text-bronze-light">
                  All Jewelry
                </Link>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.value}>
                  <Link
                    to={`/shop?category=${cat.value}`}
                    className="text-sm text-ivory/60 transition-colors hover:text-bronze-light"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/80">Help</h4>
            <ul className="mt-5 space-y-3">
              {HELP_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm text-ivory/60 transition-colors hover:text-bronze-light">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/80">Company</h4>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-ivory/60 transition-colors hover:text-bronze-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-ivory/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ivory/45">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">We accept</span>
            <span className="rounded-sm border border-ivory/15 px-2.5 py-1 text-[10px] font-bold italic tracking-wide text-ivory/70">VISA</span>
            <span className="flex items-center rounded-sm border border-ivory/15 px-2 py-1">
              <span className="size-3 rounded-full bg-[#EB001B]/80" />
              <span className="-ml-1.5 size-3 rounded-full bg-[#F79E1B]/80" />
            </span>
            <span className="rounded-sm border border-ivory/15 px-2.5 py-1 text-[10px] font-bold tracking-wide text-ivory/70">AMEX</span>
            <span className="rounded-sm border border-ivory/15 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-ivory/70">PayPal</span>
            <span className="rounded-sm border border-ivory/15 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-ivory/70">
              Pay
            </span>
          </div>
          <div className="flex gap-5 text-xs text-ivory/45">
            <a href="#" className="transition-colors hover:text-ivory/80">Privacy</a>
            <a href="#" className="transition-colors hover:text-ivory/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
