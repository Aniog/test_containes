import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-cocoa text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="grid gap-10 border-b border-velmora-ivory/15 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serifDisplay text-4xl font-semibold tracking-[0.2em] text-velmora-ivory">VELMORA</Link>
            <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-velmora-oat">
              Demi-fine gold jewelry designed for quiet rituals, meaningful gifts, and everyday radiance.
            </p>
            <div className="mt-6 flex gap-3 text-velmora-champagne">
              <Instagram className="h-5 w-5" />
              <Music2 className="h-5 w-5" />
              <Mail className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-champagne">{group.title}</h3>
                <ul className="mt-5 space-y-3 font-sans text-sm text-velmora-oat">
                  {group.links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-champagne">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 font-sans text-xs uppercase tracking-[0.2em] text-velmora-oat sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-2">
            {['VISA', 'AMEX', 'MC', 'PAY'].map((item) => (
              <span key={item} className="rounded border border-velmora-ivory/20 px-2.5 py-1 text-[10px] text-velmora-ivory">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
