import { CreditCard, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Sizing', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Press', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="grid gap-10 border-b border-velmora-champagne/25 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-luxury text-velmora-ivory">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/72">
              Demi-fine gold jewelry with an editorial sensibility, made for gifting, daily rituals, and quiet moments of shine.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#journal" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-champagne/35 text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#journal" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-champagne/35 text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="TikTok"><Music2 className="h-4 w-4" /></a>
              <a href="mailto:hello@velmora.example" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-champagne/35 text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Email"><Mail className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-heirloom text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/72">
                  {column.links.map((link) => (
                    <li key={link}><a href="#collections" className="transition hover:text-velmora-champagne">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-velmora-ivory/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-velmora-ivory/80">
            <span className="text-xs uppercase tracking-luxury">Secure Payments</span>
            <CreditCard className="h-5 w-5 text-velmora-champagne" />
            <span className="rounded border border-velmora-champagne/30 px-2 py-1 text-xs">VISA</span>
            <span className="rounded border border-velmora-champagne/30 px-2 py-1 text-xs">MC</span>
            <span className="rounded border border-velmora-champagne/30 px-2 py-1 text-xs">AMEX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
