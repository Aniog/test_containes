import { Instagram, Mail, MessageCircle } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Size Guide', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists', 'Privacy'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-serif text-4xl tracking-[0.28em] text-velmora-ivory">VELMORA</p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry designed for everyday rituals, meaningful gifts, and the moments you keep.
            </p>
            <div className="mt-8 flex items-center gap-4 text-velmora-champagne">
              <Instagram className="h-5 w-5" />
              <Mail className="h-5 w-5" />
              <MessageCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-9 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="transition hover:text-velmora-champagne" href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-8 text-xs text-velmora-sand md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-ivory/20 px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-velmora-ivory">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
