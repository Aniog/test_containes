import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['New Arrivals', 'Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Privacy'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#home" className="font-serif text-4xl font-semibold tracking-[0.24em] text-velmora-ivory">VELMORA</a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">Demi-fine jewelry designed in small, luminous moments — crafted for gifting, self-purchase, and everyday ritual.</p>
            <div className="mt-7 flex items-center gap-3 text-velmora-ivory">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#home" aria-label="Velmora social link" className="rounded-full border border-velmora-ivory/15 p-3 transition hover:border-velmora-champagne hover:text-velmora-champagne">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/72">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#home" className="transition hover:text-velmora-champagne">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-ivory/10 pt-7 text-xs text-velmora-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {['Visa', 'Amex', 'Pay', 'MC'].map((label) => (
              <span key={label} className="rounded border border-velmora-ivory/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-velmora-ivory/75">{label}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
