import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-bronze text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold tracking-[0.18em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">Demi-fine gold jewelry designed in small edits for gifting, keeping, and wearing beautifully every day.</p>
            <div className="mt-6 flex gap-3 text-white">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" aria-label="Velmora social link" className="rounded-full border border-white/20 p-2 transition hover:border-velmora-champagne hover:text-velmora-champagne"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-white/75">
                  {column.links.map((link) => <li key={link}><a href="#" className="transition hover:text-white">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((pay) => <span key={pay} className="rounded border border-white/20 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white/80">{pay}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
