import { Link } from 'react-router-dom'
import { Facebook, Instagram, ShieldCheck, Sparkles, Twitter } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serifDisplay text-4xl font-semibold tracking-emblem text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for everyday rituals, quiet milestones, and gifting beautifully.
            </p>
            <div className="mt-6 flex items-center gap-3 text-velmora-gold">
              <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-velmora-ivory/15 p-3 transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-ink">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-velmora-ivory/15 p-3 transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-ink">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="rounded-full border border-velmora-ivory/15 p-3 transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-ink">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="text-sm text-velmora-champagne transition hover:text-velmora-gold">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-velmora-ivory/15 pt-8 text-sm text-velmora-champagne md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 Velmora Fine Jewelry</span>
            <span className="hidden h-1 w-1 rounded-full bg-velmora-gold md:block" />
            <span>Secure checkout</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-velmora-ivory/15 px-3 py-2 text-xs uppercase tracking-luxury">
              <ShieldCheck className="h-4 w-4 text-velmora-gold" /> Visa
            </span>
            <span className="flex items-center gap-2 rounded-full border border-velmora-ivory/15 px-3 py-2 text-xs uppercase tracking-luxury">
              <Sparkles className="h-4 w-4 text-velmora-gold" /> Amex
            </span>
            <span className="rounded-full border border-velmora-ivory/15 px-3 py-2 text-xs uppercase tracking-luxury">
              Mastercard
            </span>
            <span className="rounded-full border border-velmora-ivory/15 px-3 py-2 text-xs uppercase tracking-luxury">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
