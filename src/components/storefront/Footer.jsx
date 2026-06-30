import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  ['Shop', ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies']],
  ['Help', ['Shipping', 'Returns', 'Care Guide', 'Contact']],
  ['Company', ['Our Story', 'Journal', 'Sustainability', 'Reviews']],
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <p className="font-serif text-3xl tracking-[0.28em]">VELMORA</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/75">Demi-fine gold jewelry for rituals, milestones, and the everyday moments worth keeping.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, index) => <a key={index} href="#" className="rounded-full border border-ivory/20 p-2 text-ivory transition hover:border-champagne hover:text-champagne" aria-label="Social link"><Icon className="h-4 w-4" /></a>)}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-ivory/75">
                {items.map((item) => <li key={item}><a href="#" className="transition hover:text-champagne">{item}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-ivory/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. Crafted for modern keepsakes.</p>
          <div className="flex gap-2" aria-label="Accepted payment methods">{['VISA', 'MC', 'AMEX', 'PAY'].map((item) => <span key={item} className="rounded border border-ivory/20 px-2 py-1 text-[0.65rem] font-bold text-ivory/80">{item}</span>)}</div>
        </div>
      </div>
    </footer>
  )
}
