import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-linen bg-velmora-espresso text-velmora-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <p className="font-serifDisplay text-4xl font-semibold tracking-[0.18em] text-velmora-mist">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-mist/75">
              Premium demi-fine gold jewelry designed for gifting, self-purchase, and the everyday rituals worth keeping.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-mist/20 text-velmora-mist transition hover:border-velmora-champagne hover:text-velmora-champagne"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-mist/75 transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-mist/15 pt-7 text-sm text-velmora-mist/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'].map((method) => (
              <span key={method} className="rounded-full border border-velmora-mist/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-velmora-mist/80">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
