import { Instagram, Mail, Music2 } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-serif text-4xl font-semibold tracking-[0.18em]">VELMORA</p>
            <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry designed for daily rituals, meaningful gifts, and softly luminous moments.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  className="rounded-full border border-velmora-sand/30 p-2 text-velmora-sand transition hover:border-velmora-champagne hover:text-velmora-champagne"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-9 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans text-xs font-bold uppercase tracking-[0.35em] text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="font-sans text-sm text-velmora-sand transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-sand/20 pt-7 font-sans text-xs text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-sand/30 px-3 py-1 text-[0.62rem] tracking-[0.22em]">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
