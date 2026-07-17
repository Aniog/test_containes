import { Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-velmora-ivory/15 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="font-serif text-4xl tracking-[0.22em]">VELMORA</div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">Demi-fine gold jewelry for everyday ceremony, designed direct-to-you with premium materials and considered detail.</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Mail, Music2].map((Icon, index) => <a key={index} className="rounded-full border border-velmora-ivory/20 p-2 text-velmora-ivory transition hover:bg-velmora-ivory hover:text-velmora-espresso" href="#journal" aria-label="Social link"><Icon className="h-4 w-4" /></a>)}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/72">
                  {column.links.map((link) => <li key={link}><a className="transition hover:text-velmora-champagne" href={link === 'Our Story' ? '/#story' : '/shop'}>{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for luminous rituals.</p>
          <div className="flex flex-wrap gap-2">{['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((payment) => <span key={payment} className="border border-velmora-ivory/20 px-2.5 py-1 tracking-[0.18em] text-velmora-ivory/75">{payment}</span>)}</div>
        </div>
      </div>
    </footer>
  )
}
