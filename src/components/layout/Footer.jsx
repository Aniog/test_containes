import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Jewelry Care', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-18">
        <div className="grid gap-12 border-b border-velmora-ivory/15 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for everyday rituals, thoughtful gifting, and pieces that feel quietly personal.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-velmora-ivory/20 p-2.5 text-velmora-champagne transition hover:border-velmora-gold hover:text-velmora-gold"
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
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-velmora-champagne md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for the everyday heirloom.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'MC', 'APPLE PAY', 'PAYPAL'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-ivory/20 px-3 py-1.5 font-semibold tracking-[0.14em] text-velmora-ivory">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
