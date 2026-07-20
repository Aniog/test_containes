import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-forest text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-velmora-champagne/25 pb-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-cream">VELMORA</Link>
            <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-velmora-champagne">Demi-fine gold jewelry designed for luminous daily rituals, intimate gifts, and pieces you return to again and again.</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Mail, Music2].map((Icon, index) => (
                <a key={index} href="#" className="inline-flex h-10 w-10 items-center justify-center border border-velmora-champagne/35 text-velmora-cream transition hover:border-velmora-bronze hover:text-velmora-bronze" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">{column.title}</h3>
                <ul className="mt-5 space-y-3 font-sans text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-cream">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 font-sans text-xs text-velmora-champagne md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'MC', 'PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-champagne/35 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-velmora-cream">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
