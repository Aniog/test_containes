import { Instagram, Facebook, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-[0.2em]">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">
              Quietly luminous demi-fine jewelry crafted for daily rituals, self-purchase, and meaningful gifting.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Mail].map((Icon, index) => (
                <a key={index} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-ivory/20 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-ivory">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-7 text-xs text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-ivory/20 px-2 py-1 text-[0.62rem] tracking-editorial text-velmora-ivory">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
