import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold tracking-[0.25em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">
              Demi-fine gold jewelry with a warm editorial spirit, crafted for gifting, self-purchase, and everyday heirlooms.
            </p>
            <div className="mt-6 flex gap-3 text-velmora-ivory">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" aria-label="Social link" className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-ivory/20 transition hover:border-velmora-champagne hover:text-velmora-champagne">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/78">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-champagne">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-7 text-xs text-velmora-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-ivory/20 px-2 py-1 text-[0.65rem] font-bold tracking-widest text-velmora-ivory/80">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
