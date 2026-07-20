import { Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.5fr_1fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold tracking-[0.22em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/75">Demi-fine gold jewelry designed for everyday rituals, meaningful gifts, and pieces you reach for again and again.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-luxe text-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-ivory/75">
                  {column.links.map((link) => <li key={link}><a className="transition hover:text-champagne" href="#">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-luxe text-champagne">Connect</h3>
            <div className="mt-5 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-champagne/40 text-ivory transition hover:bg-champagne hover:text-espresso" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-luxe text-espresso">
              {['Visa', 'Amex', 'Apple Pay', 'PayPal'].map((pay) => <span key={pay} className="bg-ivory px-3 py-2">{pay}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-ivory/15 pt-6 text-xs text-ivory/55">© 2026 Velmora Fine Jewelry. Crafted with quiet luxury.</div>
      </div>
    </footer>
  )
}
