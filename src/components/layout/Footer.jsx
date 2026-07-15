import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_2fr] md:px-8 lg:py-20">
        <div>
          <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-cream">VELMORA</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/70">
            Demi-fine gold jewelry made for gifting, self-celebration, and every quietly luminous day between.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Music2, Mail].map((Icon, index) => (
              <a key={index} href="#" className="rounded-full border border-velmora-cream/20 p-3 text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-cream/72">
                {column.links.map((link) => <li key={link}><a className="transition hover:text-velmora-champagne" href="#">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-velmora-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-velmora-cream/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((item) => <span key={item} className="rounded border border-velmora-cream/20 px-2 py-1 text-[10px] tracking-[0.16em] text-velmora-cream/75">{item}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
