import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-footer">
          <div>
            <Link to="/" className="font-serif text-3xl font-semibold tracking-atelier text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for rituals, gifts, and the quiet shimmer of everyday life.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-champagne/40 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-champagne transition hover:text-velmora-ivory">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-champagne/20 pt-6 text-sm text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((label) => (
              <span key={label} className="rounded border border-velmora-champagne/40 px-2 py-1 text-micro font-bold tracking-editorial text-velmora-ivory">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
