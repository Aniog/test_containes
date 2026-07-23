import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-pearl">
      <div className="velmora-container py-14 md:py-18">
        <div className="grid gap-10 border-b border-velmora-gold/25 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold tracking-[0.20em] text-velmora-pearl">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-mist">Premium demi-fine gold jewelry designed for daily rituals, quiet gifting, and lasting glow.</p>
            <div className="mt-6 flex items-center gap-3 text-velmora-champagne">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Music2 className="h-5 w-5" />
              <Mail className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-mist">
                  {column.links.map((link) => (
                    <li key={link}><a href="#" className="transition hover:text-velmora-champagne">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs uppercase tracking-[0.18em] text-velmora-mist md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-gold/30 px-3 py-1 text-[0.62rem] text-velmora-pearl">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
