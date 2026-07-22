import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Press'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-18">
        <div className="grid gap-12 border-b border-velmora-porcelain/15 pb-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-porcelain">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-porcelain/75">
              Demi-fine gold jewelry designed for modern rituals, meaningful gifts, and pieces you reach for every day.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon) => (
                <a key={Icon.name} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-porcelain/20 text-velmora-porcelain transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label={Icon.name}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-porcelain/75">
                  {column.links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-champagne">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-porcelain/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="rounded border border-velmora-porcelain/20 px-2.5 py-1 text-[0.65rem] font-semibold text-velmora-porcelain/75">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
