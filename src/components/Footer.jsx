import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const columns = [
    { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
    { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
    { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
  ]

  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-18">
        <div className="grid gap-10 border-b border-velmora-cream/15 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/75">
              Demi-fine gold jewelry crafted for the rituals of gifting, layering, and collecting.
            </p>
            <div className="mt-6 flex items-center gap-3 text-velmora-cream">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-velmora-cream/20 p-2 transition-colors hover:border-velmora-champagne hover:text-velmora-champagne"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-sm text-velmora-cream/75">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition-colors hover:text-velmora-champagne">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-velmora-cream/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-velmora-cream/20 px-3 py-1 text-xs font-semibold text-velmora-cream/80"
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

export default Footer
