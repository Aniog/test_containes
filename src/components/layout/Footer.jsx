import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 border-b border-velmora-gold/25 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-bold tracking-[0.2em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for soft rituals, luminous gifting, and everyday heirloom energy.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-gold/40 p-2.5 text-velmora-champagne transition hover:bg-velmora-gold hover:text-velmora-espresso" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-gold">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((payment) => (
              <span key={payment} className="rounded-full border border-velmora-gold/35 px-3 py-1 font-bold tracking-[0.16em] text-velmora-porcelain">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
