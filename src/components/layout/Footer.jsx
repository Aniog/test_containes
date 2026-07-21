import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['New Arrivals', 'Bestsellers', 'Earrings', 'Necklaces'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-noir text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-serif text-4xl tracking-[0.18em] text-velmora-ivory">VELMORA</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-velmora-mist">
              Demi-fine gold jewelry designed for everyday rituals, meaningful gifts, and the softly luminous moments in between.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-velmora-ivory transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-espresso"
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
                <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-mist">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span
                key={item}
                className="rounded border border-white/20 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-velmora-ivory"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
