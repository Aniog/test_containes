import { Facebook, Instagram, Mail } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_2fr] md:px-8">
        <div>
          <h2 className="font-serif text-5xl tracking-[0.18em]">VELMORA</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream">
            Demi-fine gold jewelry made for daily rituals, thoughtful gifting, and quietly luminous moments.
          </p>
          <div className="mt-8 flex gap-3 text-velmora-champagne">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-cream">
                {column.links.map((link) => <li key={link}>{link}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-velmora-champagne/20 px-5 py-6 text-velmora-cream md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-widest md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <p>Visa · Mastercard · Amex · Apple Pay · PayPal</p>
        </div>
      </div>
    </footer>
  )
}
