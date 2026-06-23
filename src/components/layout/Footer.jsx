import React from 'react'
import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Size Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 border-b border-porcelain/15 pb-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl tracking-[0.18em] text-porcelain">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-porcelain/75">Demi-fine gold jewelry designed for the small rituals, gifted moments, and everyday heirlooms that become yours.</p>
            <div className="mt-6 flex gap-3 text-champagne"><Instagram className="h-5 w-5" /><Facebook className="h-5 w-5" /><Music2 className="h-5 w-5" /><Mail className="h-5 w-5" /></div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-porcelain/75">
                  {column.links.map((link) => <li key={link}><a href="#top" className="transition hover:text-champagne">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-sm text-porcelain/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for luminous everyday wear.</p>
          <div className="flex gap-2" aria-label="Accepted payment methods">
            {['VISA', 'AMEX', 'PAY', 'MC'].map((label) => <span key={label} className="border border-porcelain/20 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-porcelain/80">{label}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
