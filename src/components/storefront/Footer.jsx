import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About', 'Journal', 'Sustainability', 'Privacy'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-linen bg-velmora-cream text-velmora-espresso">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_2fr] lg:px-10 lg:py-16">
        <div>
          <a href="/" className="font-serif text-4xl font-semibold tracking-luxe text-velmora-espresso">VELMORA</a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cocoa">
            Demi-fine gold jewelry with an editorial sensibility, made for gifting and everyday rituals.
          </p>
          <div className="mt-6 flex gap-3 text-velmora-cocoa">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a key={index} href="/#journal" className="rounded-full border border-velmora-linen p-2 transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-velmora-cocoa">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href={column.title === 'Shop' ? '/shop' : '/#story'} className="transition hover:text-velmora-gold">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-velmora-linen">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs text-velmora-cocoa md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-linen bg-velmora-ivory px-2 py-1 font-bold tracking-[0.12em] text-velmora-cocoa">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
