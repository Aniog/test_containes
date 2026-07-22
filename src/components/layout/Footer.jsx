import { Instagram, Music2, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

const Footer = () => (
  <footer className="bg-velmora-espresso text-velmora-ivory">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link to="/" className="font-serif text-4xl tracking-[0.18em] text-velmora-ivory">VELMORA</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-blush">
            Demi-fine gold jewelry made for daily rituals, meaningful gifts, and the pieces you reach for without thinking.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Music2, Youtube].map((Icon, index) => (
              <a key={index} href="#journal" className="rounded-full border border-velmora-blush/30 p-2 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#shop" className="text-sm text-velmora-blush transition hover:text-velmora-champagne">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-5 border-t border-velmora-blush/20 pt-7 text-sm text-velmora-blush sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
          <span className="rounded border border-velmora-blush/30 px-2 py-1">Visa</span>
          <span className="rounded border border-velmora-blush/30 px-2 py-1">Amex</span>
          <span className="rounded border border-velmora-blush/30 px-2 py-1">Pay</span>
          <span className="rounded border border-velmora-blush/30 px-2 py-1">Shop</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
