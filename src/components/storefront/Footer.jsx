import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Size Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Careers'] },
]

export default function Footer({ navigate }) {
  return (
    <footer className="bg-velmora-espresso text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <button
              type="button"
              onClick={() => navigate('home')}
              className="font-serifDisplay text-4xl font-semibold tracking-[0.18em] text-velmora-pearl"
            >
              VELMORA
            </button>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for quiet rituals, meaningful gifts, and everyday radiance.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  aria-label="Velmora social link"
                  className="flex h-10 w-10 items-center justify-center border border-velmora-sand/40 text-velmora-pearl transition hover:border-velmora-gold hover:text-velmora-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="transition hover:text-velmora-pearl">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-sand/30 pt-7 text-xs text-velmora-champagne md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY', 'SHOP'].map((item) => (
              <span key={item} className="border border-velmora-sand/30 px-3 py-1 text-[0.65rem] tracking-[0.18em]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
