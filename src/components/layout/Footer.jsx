import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-cream">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/70">
              Demi-fine gold jewelry made for everyday rituals, meaningful gifting, and pieces you reach for again and again.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-cream/20 text-velmora-cream transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}><a href="#" className="text-sm text-velmora-cream/70 transition hover:text-velmora-cream">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-cream/10 pt-7 text-xs text-velmora-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((pay) => (
              <span key={pay} className="border border-velmora-cream/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-velmora-cream/75">{pay}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
