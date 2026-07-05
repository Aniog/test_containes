import { Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <h2 className="font-serif text-5xl font-semibold tracking-[0.18em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl/72">
              Demi-fine gold jewelry designed for daily rituals, gifting moments, and the quiet art of feeling polished.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-velmora-pearl transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-champagne">{column.title}</h3>
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
        <div className="mt-12 flex flex-col gap-5 border-t border-white/12 pt-7 text-sm text-velmora-pearl/64 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="border border-white/15 px-3 py-1 text-[0.62rem] font-bold tracking-[0.18em] text-velmora-pearl/80">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
