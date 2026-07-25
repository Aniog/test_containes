import { Instagram, Music2, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink px-5 py-14 text-velmora-ivory sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-velmora-ivory/15 pb-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <p className="font-serif text-4xl font-semibold tracking-luxury">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">
              Demi-fine gold jewelry made for gifting, self-celebration, and the rituals between.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Twitter, Music2].map((Icon, index) => (
                <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-ivory/20 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/70">
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
        <div className="flex flex-col gap-5 pt-8 text-xs uppercase tracking-luxury text-velmora-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((pay) => (
              <span key={pay} className="border border-velmora-ivory/20 px-3 py-1 text-velmora-ivory/70">{pay}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
