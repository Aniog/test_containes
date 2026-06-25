import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Mail } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'Materials & Care', to: '/about' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Press', to: '/about' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl tracking-[0.3em]">VELMORA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              Demi-fine 18K gold plated jewelry, crafted to be treasured. Designed
              in studio, made to be worn every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/70 transition-colors hover:text-gold">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Email" className="text-ivory/70 transition-colors hover:text-gold">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-ivory/70 transition-colors hover:text-ivory">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 md:flex-row">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-ivory/50">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((p) => (
              <span key={p} className="rounded-sm border border-ivory/20 px-2 py-1 text-[9px] tracking-wider">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
