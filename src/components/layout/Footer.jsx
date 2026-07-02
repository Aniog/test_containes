import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="section-shell py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-luxury text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">
              Demi-fine gold jewelry designed for everyday rituals, memorable gifts, and warm-lit evenings.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/20 p-2 text-velmora-ivory/80 transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-champagne">{column.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-velmora-ivory/70">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition hover:text-velmora-champagne">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-7 text-sm text-velmora-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for the everyday heirloom.</p>
          <div className="flex gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="rounded border border-velmora-ivory/20 px-2 py-1 text-[10px] font-bold tracking-luxury text-velmora-ivory/75">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
