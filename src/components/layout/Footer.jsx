import { Link } from 'react-router-dom'
import { Instagram, Mail, Music2 } from 'lucide-react'
export default function Footer() {
  const columns = [
    { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
    { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
    { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
  ]
  return (
    <footer className="bg-velmora-ink text-velmora-cream"><div className="velmora-container py-14 md:py-20"><div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]"><div><Link to="/" className="font-display text-4xl font-semibold tracking-nav">VELMORA</Link><p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">Demi-fine gold jewelry designed for meaningful gifting, self-purchase, and everyday heirloom energy.</p><div className="mt-7 flex gap-3">{[Instagram, Music2, Mail].map((Icon, index) => <a key={index} href="#" aria-label="Velmora social link" className="grid h-10 w-10 place-items-center rounded-full border border-velmora-sand/40 text-velmora-sand transition hover:border-velmora-gold hover:text-velmora-gold"><Icon className="h-4 w-4" /></a>)}</div></div><div className="grid gap-8 sm:grid-cols-3">{columns.map((column) => <div key={column.title}><h3 className="text-xs font-extrabold uppercase tracking-nav text-velmora-champagne">{column.title}</h3><ul className="mt-4 space-y-3 text-sm text-velmora-sand">{column.links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-gold">{link}</a></li>)}</ul></div>)}</div></div><div className="mt-12 flex flex-col gap-5 border-t border-velmora-sand/20 pt-7 text-xs text-velmora-sand md:flex-row md:items-center md:justify-between"><p>© 2026 Velmora Fine Jewelry. All rights reserved.</p><div className="flex flex-wrap gap-2">{['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((item) => <span key={item} className="rounded border border-velmora-sand/30 px-2 py-1 tracking-nav">{item}</span>)}</div></div></div></footer>
  )
}
