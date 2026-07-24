import React from 'react'
import { Instagram, Music2, Send } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

const Footer = () => {
  return (
    <footer className="bg-velmora-espresso text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 border-b border-velmora-champagne/25 pb-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-serif text-4xl tracking-[0.18em]">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry designed for everyday radiance, considered gifting, and the quiet moments worth keeping.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Instagram, Music2, Send].map((Icon, index) => (
                <a
                  key={index}
                  href="#journal"
                  className="flex h-10 w-10 items-center justify-center border border-velmora-champagne/30 text-velmora-pearl transition hover:border-velmora-champagne hover:text-velmora-champagne"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-nav text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-pearl">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payments">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-champagne/30 px-2 py-1 text-[0.62rem] font-bold tracking-widest text-velmora-pearl">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
