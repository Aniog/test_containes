import { Link } from 'react-router-dom'
import { Facebook, Instagram, Music2 } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.22em] text-velmora-cream">VELMORA</Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-velmora-stone">
              Demi-fine gold jewelry designed for everyday rituals, meaningful gifting, and quiet moments of shine.
            </p>
            <div className="mt-8 flex gap-3" aria-label="Social links">
              {[Instagram, Facebook, Music2].map((Icon, index) => (
                <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social channel">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-stone">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-champagne">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-7 text-xs text-velmora-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="rounded border border-white/20 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-velmora-cream">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
