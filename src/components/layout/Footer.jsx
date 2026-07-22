import { Facebook, Instagram, Mail } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Jewelry Care', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-5xl font-semibold tracking-[0.16em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">
              Demi-fine gold jewelry made for modern rituals, meaningful gifts, and the quiet shine of every day.
            </p>
            <div className="mt-8 flex gap-4 text-velmora-ivory">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Mail className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/75">
                  {column.links.map((link) => <li key={link}>{link}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-8 text-xs uppercase tracking-[0.2em] text-velmora-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-3">
            {['Visa', 'MC', 'Amex', 'Pay'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-ivory/20 px-3 py-1 text-velmora-ivory/80">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
