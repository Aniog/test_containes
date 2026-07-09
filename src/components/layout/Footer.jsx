import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <p className="font-serif text-3xl font-semibold tracking-[0.28em] text-velmora-pearl">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl/75">
              Demi-fine gold jewelry designed for daily rituals, luminous gifting, and the small moments worth keeping.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#journal"
                  className="rounded-full border border-velmora-pearl/20 p-2.5 text-velmora-pearl transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-velmora-pearl/75">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="transition hover:text-velmora-gold">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-pearl/10 pt-6 text-xs text-velmora-pearl/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {['Visa', 'Amex', 'PayPal', 'Shop Pay'].map((payment) => (
              <span key={payment} className="border border-velmora-pearl/15 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-velmora-pearl/80">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
