import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Size Guide', 'Care Guide'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.24em]">
              VELMORA
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry designed for everyday ritual, luminous gifting, and pieces that feel personal from the first wear.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#journal"
                  className="rounded-full border border-velmora-sand/30 p-3 text-velmora-sand transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Velmora social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition hover:text-velmora-porcelain">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-sand/20 pt-8 text-sm text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted direct to you.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'AMEX', 'MC', 'PAY'].map((payment) => (
              <span
                key={payment}
                className="rounded border border-velmora-sand/30 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-velmora-porcelain"
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
