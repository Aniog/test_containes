import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-night text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 border-b border-velmora-ivory/20 pb-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.22em] text-velmora-ivory">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">
              Demi-fine gold jewelry for luminous everyday rituals, designed in small seasonal edits and shipped directly to you.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/20 p-2 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/75">
                  {column.links.map((link) => (
                    <li key={link}><a href="#" className="transition hover:text-velmora-gold">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-sm text-velmora-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY', 'SHOP PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-ivory/20 px-3 py-1 text-[0.65rem] font-bold tracking-widest text-velmora-ivory/80">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
