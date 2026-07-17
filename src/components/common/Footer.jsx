import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="font-serif text-4xl font-semibold tracking-[0.2em]">VELMORA</div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/75">
              Demi-fine gold jewelry for everyday rituals, treasured gifting, and quietly luminous moments.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-velmora-porcelain/20 p-2 text-velmora-porcelain transition hover:border-velmora-champagne hover:text-velmora-champagne"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-cream/78 transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-porcelain/15 pt-7 text-xs text-velmora-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'MC', 'PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-porcelain/20 px-2.5 py-1 tracking-[0.16em]">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
