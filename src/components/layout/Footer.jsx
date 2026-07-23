import React from 'react'
import { Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold tracking-[0.16em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">Quietly luminous demi-fine jewelry designed for the rituals you keep and the moments you gift.</p>
            <div className="mt-7 flex items-center gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="velmora-focus grid h-10 w-10 place-items-center rounded-full border border-velmora-ivory/20 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-9 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/75">
                  {column.links.map((link) => <li key={link}><a href="#" className="transition hover:text-velmora-champagne">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-6 text-xs text-velmora-ivory/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((pay) => <span key={pay} className="rounded border border-velmora-ivory/20 px-2 py-1 text-[10px] tracking-widest text-velmora-ivory/80">{pay}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
