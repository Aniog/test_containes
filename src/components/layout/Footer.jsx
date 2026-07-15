import { Facebook, Instagram, Mail, Youtube } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Contact', 'Shipping', 'Returns', 'Care Guide', 'Size Guide'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-serifDisplay text-4xl font-semibold tracking-[0.22em] text-velmora-ivory">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/72">
              Demi-fine gold jewelry designed for daily rituals, meaningful gifting, and the glow that stays with you.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-mist/30 p-2.5 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-ivory/76 transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-velmora-mist/20 pt-7 text-xs text-velmora-ivory/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY', 'SHOP PAY'].map((item) => (
              <span key={item} className="border border-velmora-mist/30 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.16em] text-velmora-ivory/85">
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
