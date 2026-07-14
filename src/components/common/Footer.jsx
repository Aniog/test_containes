import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.2em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-velmora-parchment/80">
              Demi-fine gold jewelry designed in small, luminous edits for the moments you keep close.
            </p>
            <div className="mt-8 flex items-center gap-3 text-velmora-champagne">
              <a className="rounded-full border border-velmora-champagne/35 p-2 hover:bg-velmora-champagne hover:text-velmora-ink" href="https://instagram.com" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a className="rounded-full border border-velmora-champagne/35 p-2 hover:bg-velmora-champagne hover:text-velmora-ink" href="mailto:hello@velmora.example" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a className="rounded-full border border-velmora-champagne/35 p-2 hover:bg-velmora-champagne hover:text-velmora-ink" href="https://tiktok.com" aria-label="TikTok">
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-parchment/80">
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

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-champagne/25 pt-7 text-xs text-velmora-parchment/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for quiet daily radiance.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'AMEX', 'MC', 'PAY'].map((label) => (
              <span key={label} className="border border-velmora-champagne/30 px-2.5 py-1 font-bold tracking-luxury text-velmora-champagne">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
