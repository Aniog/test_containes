import { Link } from "react-router-dom"
import { Instagram, Mail, Twitter } from "lucide-react"

const FOOTER_COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Materials & Care", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
]

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-velmora py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.32em]">VELMORA</span>
            </Link>
            <p className="text-muted-dark text-sm leading-relaxed max-w-sm font-light">
              Demi-fine gold jewelry, hand-finished in small batches. Crafted to be treasured —
              worn daily, gifted often.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="p-2 text-cream hover:text-gold transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="p-2 text-cream hover:text-gold transition-colors"
              >
                <Twitter className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="p-2 text-cream hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold mb-5">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-cream/85 hover:text-gold transition-colors"
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

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-gold/15 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-dark">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.2em] text-muted-dark">
            {PAYMENT_METHODS.map((pm) => (
              <li key={pm} className="px-2 py-1 border border-cream/15 rounded-sm">
                {pm}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
