import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 border-b border-velmora-cream/15 pb-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.22em] text-velmora-pearl">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-linen">
              Demi-fine gold jewelry designed for everyday rituals, milestone gifting, and quiet moments of shine.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#journal" className="rounded-full border border-velmora-cream/20 p-3 text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ['Shop', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
              ['Help', 'Shipping', 'Returns', 'Care Guide', 'Contact'],
              ['Company', 'Our Story', 'Journal', 'Sustainability', 'Stockists'],
            ].map((column) => (
              <div key={column[0]}>
                <h3 className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">{column[0]}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-linen">
                  {column.slice(1).map((item) => (
                    <li key={item}>
                      <a href="#" className="transition hover:text-velmora-champagne">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-velmora-linen md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
            {['Visa', 'Amex', 'PayPal', 'Apple Pay'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-cream/20 px-3 py-2 text-velmora-cream">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
