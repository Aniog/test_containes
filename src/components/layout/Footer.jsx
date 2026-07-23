import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Size Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold tracking-[0.18em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for luminous everyday rituals, meaningful gifting, and the pieces you keep close.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-ivory/20 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Velmora social profile"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">
                  {column.title}
                </h3>
                <ul className="mt-4 grid gap-3 text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-ivory">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-6 text-xs text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="border border-velmora-ivory/20 px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.16em]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
