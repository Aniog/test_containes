import { Instagram, Facebook, Gem } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerColumns } from '@/data/storefront'

const paymentBadges = ['Visa', 'Mastercard', 'Amex', 'Apple Pay']

export default function Footer() {
  return (
    <footer id="footer-social" className="border-t border-velmora-sand/60 bg-velmora-ink text-velmora-mist">
      <div className="velmora-shell grid gap-12 py-14 lg:grid-cols-[1.2fr_1fr] lg:py-20">
        <div className="space-y-6">
          <Link to="/" className="font-display text-4xl tracking-[0.45em] text-velmora-mist">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-velmora-mist/75">
            Premium demi-fine jewelry for gifting, layering, and the quiet luxury of everyday polish.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-velmora-mist/60">
            {paymentBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 px-3 py-2">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-mist/60">{column.title}</h3>
              <ul className="space-y-3 text-sm text-velmora-mist/80">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition hover:text-velmora-gold" to={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="velmora-shell flex flex-col gap-4 border-t border-white/10 py-6 text-xs uppercase tracking-[0.28em] text-velmora-mist/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Velmora Fine Jewelry</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="transition hover:text-velmora-gold">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="transition hover:text-velmora-gold">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Pinterest" className="transition hover:text-velmora-gold">
            <Gem className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
