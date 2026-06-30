import { Instagram, Music2, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Press'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <h2 className="font-serif text-5xl font-semibold tracking-[0.18em]">VELMORA</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for keepsake moments, everyday rituals, and gifts that feel personal.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Instagram, Twitter, Music2].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/20 p-3 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-ivory">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/10 pt-8 text-xs uppercase tracking-[0.18em] text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((method) => (
              <span key={method} className="rounded-full border border-velmora-ivory/15 px-3 py-1 text-[0.65rem] text-velmora-ivory">{method}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
