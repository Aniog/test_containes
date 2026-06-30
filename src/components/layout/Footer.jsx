import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-velmora-espresso px-5 py-12 text-velmora-pearl md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-velmora-pearl/15 pb-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <button type="button" onClick={() => onNavigate('#home')} className="font-serif text-4xl font-semibold tracking-[0.28em] text-velmora-pearl">
              VELMORA
            </button>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl/70">
              Demi-fine gold jewelry for considered rituals, glowing gifts, and everyday elegance.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#home" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-pearl/20 text-velmora-pearl transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-luxury text-velmora-gold">{column.title}</h3>
                <ul className="space-y-3 text-sm text-velmora-pearl/72">
                  {column.links.map((link) => (
                    <li key={link}>
                      <button type="button" onClick={() => onNavigate(link === 'Bestsellers' ? '#shop' : '#home')} className="transition hover:text-velmora-gold">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 pt-7 text-xs uppercase tracking-[0.18em] text-velmora-pearl/55 md:flex-row md:items-center">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((item) => (
              <span key={item} className="border border-velmora-pearl/15 px-3 py-2 text-velmora-pearl/70">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
