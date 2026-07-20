import { Instagram, Facebook, CreditCard } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-stone bg-velmora-espresso text-velmora-pearl">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_2fr] lg:py-18">
        <div>
          <p className="font-serif text-4xl font-semibold tracking-[0.18em]">VELMORA</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
            Demi-fine gold jewelry designed for luminous everyday rituals and unforgettable gifts.
          </p>
          <div className="mt-7 flex items-center gap-4 text-velmora-champagne">
            <Instagram className="h-5 w-5" aria-label="Instagram" />
            <Facebook className="h-5 w-5" aria-label="Facebook" />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                {column.links.map((link) => <li key={link}>{link}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-velmora-pearl/15 px-5 py-5 text-velmora-champagne sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex items-center gap-3">
            <CreditCard className="h-4 w-4" aria-hidden="true" />
            <span>Visa · Mastercard · Amex · Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
