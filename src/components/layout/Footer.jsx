import { Instagram, Music2, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-velmora-cream/15 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-serifDisplay text-4xl font-semibold tracking-[0.22em]">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/70">Demi-fine gold jewelry crafted for daily ritual, occasion dressing, and meaningful gifting.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Youtube].map((Icon, index) => (
                <a key={index} href="#journal" className="rounded-full border border-velmora-cream/20 p-2 text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-cream/75">
                  {column.links.map((link) => <li key={link}><a href="#top" className="transition hover:text-velmora-champagne">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-sm text-velmora-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2" aria-label="Accepted payments">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-cream/20 px-3 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-velmora-cream/80">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
