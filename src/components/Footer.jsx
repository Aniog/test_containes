import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_2fr] lg:px-8 lg:py-16">
        <div>
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="font-serif text-4xl font-semibold tracking-[0.24em] text-velmora-ivory"
          >
            VELMORA
          </button>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">
            Quietly luminous demi-fine jewelry designed for everyday rituals, gifting, and self-purchase.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#top"
                className="rounded-full border border-velmora-ivory/20 p-3 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne"
                aria-label="Velmora social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            ['Shop', ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets']],
            ['Help', ['Shipping', 'Returns', 'Care Guide', 'Contact']],
            ['Company', ['About', 'Journal', 'Sustainability', 'Stockists']],
          ].map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-champagne">{title}</h3>
              <ul className="space-y-3 text-sm text-velmora-ivory/70">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="transition hover:text-velmora-ivory">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-velmora-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-velmora-ivory/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'APPLE PAY', 'PAYPAL'].map((payment) => (
              <span key={payment} className="rounded-full border border-velmora-ivory/15 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-velmora-ivory/70">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
