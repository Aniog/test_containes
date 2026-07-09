import { Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-50">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-5xl tracking-[0.2em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-amber-200">
              Demi-fine gold jewelry made for everyday rituals, thoughtful gifting, and luminous self-purchase moments.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/40 text-amber-200 transition hover:border-amber-700 hover:text-amber-700"
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
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                  {column.title}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-amber-200 transition hover:text-stone-50">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-amber-200/20 pt-6 text-sm text-amber-200 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'APPLE PAY', 'PAYPAL'].map((payment) => (
              <span key={payment} className="border border-amber-200/30 px-3 py-1 text-[0.65rem] tracking-[0.2em]">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
