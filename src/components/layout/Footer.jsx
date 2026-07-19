import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Materials', 'Stockists'] },
]

const Footer = () => (
  <footer className="bg-velmora-espresso text-velmora-ivory">
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link to="/" className="font-serif text-4xl font-bold tracking-[0.24em] text-velmora-ivory">VELMORA</Link>
          <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-velmora-champagne/80">
            Demi-fine gold jewelry made for gifting, self-purchase, and the rituals in between.
          </p>
          <div className="mt-8 flex items-center gap-4 text-velmora-champagne">
            <Instagram className="h-5 w-5" />
            <Music2 className="h-5 w-5" />
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-sans text-sm text-velmora-champagne/80 transition hover:text-velmora-ivory">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-5 border-t border-velmora-champagne/15 pt-7 font-sans text-xs text-velmora-champagne/70 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-2">
          {['VISA', 'MC', 'AMEX', 'PAY'].map((icon) => (
            <span key={icon} className="rounded border border-velmora-champagne/20 px-3 py-1 text-[10px] tracking-[0.18em] text-velmora-champagne/80">{icon}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
