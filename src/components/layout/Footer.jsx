import { Instagram, Mail, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', items: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', items: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', items: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-refined">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">Demi-fine gold jewelry made for everyday rituals, gifting, and quiet moments of shine.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Twitter, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-sand/30 p-3 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-refined text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {column.items.map((item) => <li key={item}><a href="#" className="transition hover:text-velmora-ivory">{item}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-sand/20 pt-8 text-xs text-velmora-sand md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Amex', 'Apple Pay', 'PayPal'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-sand/30 px-3 py-1 text-velmora-ivory">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
