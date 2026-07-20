import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-widest text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry designed for daily rituals, modern gifting,
              and pieces that feel quietly personal.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon) => (
                <a
                  key={Icon.displayName || Icon.name}
                  href="#journal"
                  className="rounded-full border border-velmora-ivory/25 p-3 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widestLuxury text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#collections" className="transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-8 text-sm text-velmora-sand md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span
                key={payment}
                className="border border-velmora-ivory/20 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-velmora-ivory"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
