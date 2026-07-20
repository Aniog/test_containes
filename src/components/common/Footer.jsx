import React from 'react'
import { Instagram, Music2, Youtube } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-velmora-champagne/25 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-serif text-4xl uppercase tracking-[0.28em]">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">Demi-fine gold jewelry for everyday rituals, thoughtful gifts, and heirloom-feeling moments.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Youtube].map((Icon, index) => (
                <span key={index} className="grid h-10 w-10 place-items-center rounded-full border border-velmora-champagne/35 text-velmora-ivory">
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/75">
                  {column.links.map((link) => <li key={link}>{link}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-sm text-velmora-ivory/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2">
            {['Visa', 'MC', 'Amex', 'Pay'].map((pay) => <span key={pay} className="border border-velmora-champagne/35 px-3 py-1 text-xs text-velmora-ivory">{pay}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
