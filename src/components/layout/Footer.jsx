import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-linen">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serifDisplay text-3xl tracking-[0.28em] text-velmora-linen">
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-velmora-parchment">
              Demi-fine gold jewelry made for daily rituals, meaningful gifting, and the quiet glow of pieces you reach for again and again.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Velmora social link"
                  className="rounded-full border border-velmora-clay p-3 text-velmora-linen transition hover:border-velmora-gold hover:text-velmora-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-brass">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-parchment transition hover:text-velmora-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-clay/50 pt-8 text-xs text-velmora-parchment md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Frontend storefront preview.</p>
          <div className="flex flex-wrap gap-2 text-velmora-ink">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((card) => (
              <span key={card} className="rounded-sm bg-velmora-parchment px-3 py-1 text-[10px] font-bold tracking-wider">
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
