import { Facebook, Instagram, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return <footer className="bg-velmora-espresso text-velmora-porcelain"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]"><div><Link to="/" className="font-serif text-4xl tracking-luxury">VELMORA</Link><p className="mt-5 max-w-sm text-sm leading-7 text-velmora-stone">Demi-fine gold jewelry designed for daily rituals, milestone gifts, and quiet moments of shine.</p><div className="mt-6 flex gap-4"><Instagram className="h-5 w-5" /><Facebook className="h-5 w-5" /><Mail className="h-5 w-5" /></div></div><div className="grid gap-8 sm:grid-cols-3">{columns.map((column) => <div key={column.title}><h3 className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">{column.title}</h3><ul className="mt-5 space-y-3">{column.links.map((link) => <li key={link}><a href="/#" className="text-sm text-velmora-stone transition hover:text-velmora-gold">{link}</a></li>)}</ul></div>)}</div></div><div className="mt-12 flex flex-col gap-5 border-t border-velmora-cocoa pt-6 text-xs text-velmora-stone md:flex-row md:items-center md:justify-between"><p>© 2026 Velmora Fine Jewelry. All rights reserved.</p><div className="flex gap-2"><span className="border border-velmora-cocoa px-3 py-1">VISA</span><span className="border border-velmora-cocoa px-3 py-1">MC</span><span className="border border-velmora-cocoa px-3 py-1">AMEX</span><span className="border border-velmora-cocoa px-3 py-1">PAY</span></div></div></div></footer>
}
