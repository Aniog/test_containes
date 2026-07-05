import { Facebook, Instagram, Mail } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

function Footer({ onNavigate }) {
  return (
    <footer className="bg-velmora-espresso text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 border-b border-velmora-pearl/15 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-serif text-4xl tracking-[0.2em] text-velmora-pearl"
            >
              VELMORA
            </button>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl/70">
              Demi-fine gold jewelry designed for modern rituals, milestone gifts, and everyday radiance.
            </p>
            <div className="mt-7 flex items-center gap-4 text-velmora-gold">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Mail className="h-5 w-5" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-velmora-pearl/72">
                  {column.links.map((link) => (
                    <li key={link}>
                      <button type="button" className="transition hover:text-velmora-gold">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs uppercase tracking-[0.18em] text-velmora-pearl/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((item) => (
              <span key={item} className="border border-velmora-pearl/20 px-3 py-1 text-[10px] text-velmora-pearl/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
