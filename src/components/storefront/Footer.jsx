import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

function Footer() {
  return (
    <footer className="bg-espresso text-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 border-b border-porcelain/15 pb-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.22em] text-porcelain">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-porcelain/75">Demi-fine gold jewelry designed for daily rituals, meaningful gifting, and a lifetime of small celebrations.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-porcelain/20 text-porcelain transition hover:border-champagne hover:text-champagne" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-porcelain/75 transition hover:text-porcelain">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-porcelain/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((payment) => (
              <span key={payment} className="border border-porcelain/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-porcelain/75">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
