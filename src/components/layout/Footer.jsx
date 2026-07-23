import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-mist bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_2fr] md:px-8 lg:px-10">
        <div>
          <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-ivory">VELMORA</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-parchment">Demi-fine gold jewelry for meaningful rituals, self-purchase, and gifts that feel quietly personal.</p>
          <div className="mt-6 flex items-center gap-3 text-velmora-parchment">
            <Instagram className="h-5 w-5" aria-hidden="true" />
            <Music2 className="h-5 w-5" aria-hidden="true" />
            <Mail className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-gold">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-velmora-parchment">
                {column.links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-gold">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-velmora-ivory/10 px-5 py-5 text-xs text-velmora-parchment md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <p className="tracking-[0.18em]">VISA · AMEX · APPLE PAY · SHOP PAY</p>
        </div>
      </div>
    </footer>
  )
}
