import { Instagram, Mail, Music2 } from 'lucide-react'

const footerLinks = {
  Shop: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Stockists'],
}

function Footer() {
  return (
    <footer className="border-t border-velmora-linen bg-velmora-obsidian text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-serif text-4xl tracking-wide">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl">
              Demi-fine gold jewelry made for everyday rituals, memorable gifts, and the pieces you never want to take off.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  aria-label="Velmora social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-cocoa text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-semibold uppercase tracking-luxe text-velmora-champagne">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-pearl">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-cocoa pt-8 text-xs text-velmora-pearl md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="border border-velmora-cocoa px-3 py-1 tracking-widest text-velmora-ivory">
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
