import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  ['Shop', ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies']],
  ['Help', ['Shipping', 'Returns', 'Care Guide', 'Contact']],
  ['Company', ['Our Story', 'Journal', 'Sustainability', 'Gifting']],
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-velmora-champagne/25 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-porcelain">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-porcelain/72">Demi-fine gold jewelry for luminous daily rituals, thoughtful gifting, and quiet luxury moments.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" aria-label="Velmora social link" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-champagne/35 text-velmora-champagne transition hover:bg-velmora-champagne hover:text-velmora-espresso">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-porcelain/74">
                  {links.map((label) => <li key={label}><a href="#" className="transition hover:text-velmora-champagne">{label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-porcelain/62 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((label) => (
              <span key={label} className="rounded border border-velmora-champagne/30 px-2 py-1 text-[10px] font-bold tracking-[0.18em] text-velmora-porcelain/80">{label}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
