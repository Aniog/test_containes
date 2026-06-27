import { CreditCard, Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-bold tracking-[0.22em] text-ivory">VELMORA</h2>
            <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-ivory/70">
              Demi-fine gold jewelry made for everyday rituals, meaningful gifts, and the pieces you reach for without thinking.
            </p>
            <div className="mt-8 flex items-center gap-4 text-champagne">
              <Instagram className="h-5 w-5" />
              <Music2 className="h-5 w-5" />
              <Mail className="h-5 w-5" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 font-sans text-sm text-ivory/75">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="transition hover:text-champagne">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-ivory/15 pt-8 font-sans text-xs uppercase tracking-[0.18em] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-ivory/80" aria-label="Accepted payment methods">
            {['Visa', 'MC', 'Amex'].map((label) => (
              <span key={label} className="inline-flex items-center gap-1 rounded border border-ivory/20 px-2 py-1">
                <CreditCard className="h-3.5 w-3.5" /> {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
