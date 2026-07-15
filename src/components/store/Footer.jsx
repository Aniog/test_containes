import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', target: 'collection-page' },
      { label: 'Necklaces', target: 'collection-page' },
      { label: 'Huggies', target: 'collection-page' },
      { label: 'Gift Sets', target: 'collection-page' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', target: 'collection-page' },
      { label: 'Returns', target: 'collection-page' },
      { label: 'Care Guide', target: 'about' },
      { label: 'Contact', target: 'journal' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', target: 'about' },
      { label: 'Journal', target: 'journal' },
      { label: 'Sustainability', target: 'about' },
      { label: 'Wholesale', target: 'about' },
    ],
  },
]

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-velmora-espresso px-5 py-14 text-velmora-ivory md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_1.4fr]">
        <div>
          <button type="button" onClick={() => onNavigate('home')} className="bg-transparent p-0 font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-ivory transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne">VELMORA</button>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">
            Demi-fine gold jewelry for luminous everyday rituals, direct from our studio to your jewelry box.
          </p>
          <div className="mt-7 flex gap-3 text-velmora-champagne">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a key={index} href="#home" className="rounded-full border border-velmora-champagne/35 p-3 transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Social link">
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
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.target)}
                      className="bg-transparent p-0 text-left text-sm text-velmora-ivory/75 transition hover:text-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-velmora-ivory/15 pt-6 text-xs text-velmora-ivory/60 md:flex-row md:items-center">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-2" aria-label="Accepted payment methods">
          {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
            <span key={payment} className="border border-velmora-ivory/20 px-3 py-1 text-[0.62rem] font-bold tracking-[0.18em] text-velmora-ivory/75">{payment}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
