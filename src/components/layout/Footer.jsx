import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Materials', 'Care Guide'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Gifting', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-12">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.24em]">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">Demi-fine gold jewelry designed for everyday rituals, meaningful gifts, and softly lit moments.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-white/20 p-3 text-velmora-pearl transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {column.links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-pearl">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs uppercase tracking-[0.18em] text-velmora-sand/80 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Amex', 'PayPal', 'Apple Pay'].map((payment) => <span key={payment} className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem]">{payment}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
