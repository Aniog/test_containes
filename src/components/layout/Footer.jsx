import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.22em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-velmora-mist">
              Demi-fine gold jewelry designed for everyday ritual, gifting, and quiet celebration.
            </p>
            <div className="mt-7 flex items-center gap-3" aria-label="Social links">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-velmora-champagne/30 p-2 text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                  aria-label="Velmora social profile"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-mist transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-champagne/20 pt-7 text-sm text-velmora-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payments">
            {['Visa', 'Amex', 'Pay', 'MC'].map((payment) => (
              <span key={payment} className="border border-velmora-champagne/30 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-velmora-cream">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
