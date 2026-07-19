import { Link } from "react-router-dom"
import { Instagram, Mail, Music2 } from "lucide-react"

const columns = [
  { title: "Shop", links: ["Bestsellers", "Earrings", "Necklaces", "Gift Sets"] },
  { title: "Help", links: ["Shipping", "Returns", "Care Guide", "Contact"] },
  { title: "Company", links: ["Our Story", "Journal", "Sustainability", "Stockists"] },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-hairline bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-wider text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for everyday rituals, considered gifting, and heirloom-inspired glow.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="focus-ring rounded-full border border-velmora-champagne/30 p-3 text-velmora-cream transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition hover:text-velmora-cream">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-champagne/20 pt-7 text-xs text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-champagne/30 px-2.5 py-1 text-[10px] font-bold tracking-luxe text-velmora-cream">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
