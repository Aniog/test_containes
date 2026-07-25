import { Link } from "react-router-dom"
import { CreditCard, Facebook, Instagram, Youtube } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/journal" },
      { label: "Materials & Care", to: "/journal" },
      { label: "Size Guide", to: "/journal" },
      { label: "Contact Us", to: "/about" },
      { label: "FAQ", to: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Collections", to: "/collections" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-2xl font-medium uppercase tracking-[0.3em] text-ivory">
              Velmora
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-dark">
              Demi-fine gold jewelry crafted to be treasured — designed in small batches,
              plated in 18k gold, made for every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-muted-dark transition-colors hover:text-gold-light">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-dark transition-colors hover:text-gold-light">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-dark transition-colors hover:text-gold-light">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="font-serif text-sm italic text-muted-dark transition-colors hover:text-gold-light">
                Pin
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-light">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-dark transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-hairline-dark pt-8 md:flex-row">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-dark">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-dark">
            <CreditCard className="h-5 w-5" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Visa · Mastercard · Amex · PayPal · Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
