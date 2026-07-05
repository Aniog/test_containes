import { Instagram, MoveRight, Pin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerLinks, paymentTypes } from '../../lib/store-data.js'

function SiteFooter() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-espresso text-velmora-mist">
      <div className="page-shell grid gap-12 py-12 lg:grid-cols-[1.25fr,2fr] lg:py-16">
        <div className="space-y-5">
          <Link to="/" className="inline-block font-display text-2xl tracking-brand">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-velmora-sand">
            Direct-to-consumer demi-fine jewelry made for gifting, self-purchase, and quietly luminous everyday styling.
          </p>
          <div className="flex items-center gap-3 text-sm text-velmora-sand">
            <Sparkles className="h-4 w-4 text-velmora-gold" />
            Gift-ready packaging with every order.
          </div>
          <div className="flex items-center gap-3 text-velmora-mist">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Pinterest">
              <Pin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-overline text-velmora-sand">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-velmora-mist">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={title === 'company' && link === 'About' ? '/about' : title === 'company' && link === 'Journal' ? '/journal' : '/shop'}
                      className="inline-flex items-center gap-2 transition hover:text-velmora-gold"
                    >
                      <span>{link}</span>
                      <MoveRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-4 py-5 text-xs uppercase tracking-overline text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {paymentTypes.map((paymentType) => (
              <span key={paymentType} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-velmora-mist">
                {paymentType}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
