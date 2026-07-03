import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'Care Guide', to: '/about' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/about' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Privacy', to: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-espresso-bg text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</h3>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in-house,
              made for everyday wear.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/60 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/60 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.1em] text-cream/40 border border-cream/20 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
