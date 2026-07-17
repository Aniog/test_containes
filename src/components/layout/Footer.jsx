import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Materials', 'Care Guide'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="luxury-container py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-luxury text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/72">
              Demi-fine gold jewelry, designed direct-to-you for modern rituals, meaningful gifts, and pieces you keep close.
            </p>
            <div className="mt-7 flex items-center gap-3" aria-label="Social links">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="premium-focus inline-flex h-10 w-10 items-center justify-center border border-velmora-mist/25 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social profile">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to={link === 'Earrings' || link === 'Necklaces' || link === 'Huggies' ? `/shop?category=${link}` : '/shop'} className="premium-focus text-sm text-velmora-ivory/72 transition hover:text-velmora-champagne">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-mist/20 pt-6 text-xs text-velmora-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-mist/25 px-3 py-1 font-semibold tracking-luxury text-velmora-ivory/75">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
