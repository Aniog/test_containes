import { Instagram, Facebook, CreditCard, CircleDollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerColumns } from '@/data/storeData'

export default function Footer() {
  return (
    <footer className="border-t border-velmora-sand bg-velmora-ivory">
      <div className="page-shell grid gap-12 py-14 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link to="/" className="font-display text-3xl tracking-[0.3em] text-velmora-ink">
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-taupe">
            Premium demi-fine jewelry designed for gifting, layering, and treasuring every day.
          </p>
          <div className="mt-8 flex items-center gap-3 text-velmora-taupe">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">{title}</p>
              <div className="mt-5 space-y-3 text-sm text-velmora-ink">
                {links.map((link) => (
                  <p key={link}>{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-sand">
        <div className="page-shell flex flex-col gap-4 py-5 text-sm text-velmora-taupe md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <CreditCard className="h-4 w-4" />
            <CircleDollarSign className="h-4 w-4" />
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
