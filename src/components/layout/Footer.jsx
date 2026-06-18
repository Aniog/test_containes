import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 border-b border-velmora-pearl/12 pb-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl tracking-[0.2em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl/72">
              Demi-fine gold jewelry designed for everyday rituals, luminous gifting, and the quiet moments worth keeping.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-pearl/20 text-velmora-pearl transition hover:border-velmora-champagne hover:text-velmora-champagne">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-pearl/72">
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
        <div className="flex flex-col gap-4 pt-7 text-xs text-velmora-pearl/64 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for modern keepsakes.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="rounded border border-velmora-pearl/18 px-2 py-1 font-bold text-velmora-pearl/78">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
