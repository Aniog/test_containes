import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.2em] text-velmora-ivory">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">Demi-fine gold jewelry for considered gifting, effortless stacking, and everyday glow.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/20 p-2 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Social link">
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
                    <li key={link}><a href="#" className="transition hover:text-velmora-gold">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/10 pt-6 text-xs text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 text-velmora-espresso">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => <span key={item} className="bg-velmora-champagne px-2 py-1 text-[10px] font-bold tracking-[0.12em]">{item}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
