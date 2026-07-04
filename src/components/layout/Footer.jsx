import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.24em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for daily rituals, milestone gifting, and softly luminous evenings.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  className="rounded-full border border-velmora-cream/20 p-2 text-velmora-cream transition hover:border-velmora-gold hover:text-velmora-amber"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-sm text-velmora-champagne">
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

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-cream/15 pt-7 text-xs text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for the everyday heirloom.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'AMEX', 'MC', 'PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-cream/20 px-2 py-1 text-[10px] tracking-[0.16em] text-velmora-ivory">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
