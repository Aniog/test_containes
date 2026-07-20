import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.2em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/72">
              Demi-fine gold jewelry designed for daily rituals, gifting, and the pieces you keep close.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Velmora social link"
                  className="rounded-full border border-velmora-cream/20 p-3 text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-cream/72">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-cream">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-cream/10 pt-7 text-xs uppercase tracking-[0.2em] text-velmora-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((pay) => (
              <span key={pay} className="rounded-full border border-velmora-cream/15 px-3 py-1 text-velmora-cream/75">
                {pay}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
