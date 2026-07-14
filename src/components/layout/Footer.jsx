import { Link } from 'react-router-dom'
import { Instagram, Music2, Youtube } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_2fr] md:px-8 lg:py-20">
        <div className="space-y-5">
          <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em]">VELMORA</Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-cream/75">Demi-fine gold jewelry made for gifting, self-purchase, and the everyday rituals worth treasuring.</p>
          <div className="flex gap-3 text-velmora-cream/80">
            <Instagram className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
            <Music2 className="h-5 w-5" />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">{column.title}</h3>
              <ul className="space-y-3 text-sm text-velmora-cream/75">
                {column.links.map((link) => <li key={link}><a className="transition hover:text-velmora-champagne" href="#top">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[0.18em] text-velmora-cream/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-2">
            {['VISA', 'AMEX', 'MC', 'PAY'].map((item) => <span key={item} className="rounded border border-white/20 px-2 py-1 text-[10px] text-velmora-cream/80">{item}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
