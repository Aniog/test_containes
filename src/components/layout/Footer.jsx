import { Facebook, Instagram, Linkedin } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_2fr] md:px-8 lg:py-20">
        <div><p className="font-serif text-4xl tracking-[0.24em]">VELMORA</p><p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">Demi-fine gold jewelry made for everyday rituals, luminous gifting, and quietly memorable moments.</p><div className="mt-8 flex gap-3">{[Instagram, Facebook, Linkedin].map((Icon, index) => <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-ivory/20 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Social link"><Icon className="h-4 w-4" /></a>)}</div></div>
        <div className="grid gap-8 sm:grid-cols-3">{columns.map((column) => <div key={column.title}><h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-champagne">{column.title}</h3><ul className="mt-5 space-y-3 text-sm text-velmora-ivory/70">{column.links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-ivory">{link}</a></li>)}</ul></div>)}</div>
      </div>
      <div className="border-t border-velmora-ivory/10 px-5 py-6 md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[0.2em] text-velmora-ivory/55 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Velmora Fine Jewelry</p><div className="flex gap-2">{['VISA', 'AMEX', 'MC', 'PAY'].map((item) => <span key={item} className="border border-velmora-ivory/15 px-2 py-1 text-[0.62rem]">{item}</span>)}</div></div></div>
    </footer>
  )
}
