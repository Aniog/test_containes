import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.22em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-linen">
              Demi-fine gold jewelry designed for luminous rituals, thoughtful gifting, and every day worth remembering.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  aria-label="Social link"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-linen/30 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-velmora-linen">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition hover:text-velmora-gold">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-linen/20 pt-7 text-xs text-velmora-linen sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((icon) => (
              <span key={icon} className="rounded border border-velmora-linen/30 px-2.5 py-1 text-[10px] tracking-[0.16em]">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
