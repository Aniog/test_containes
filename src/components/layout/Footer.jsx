import React from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Facebook, Instagram, Landmark, Music2, Youtube } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'Contact Us', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press'],
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Music2, label: 'TikTok' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-coal">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-[0.28em] text-ivory transition-colors hover:text-gold"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand">
              Demi-fine jewelry in 18K gold — designed in small batches, crafted
              to be treasured for years, priced to be lived in daily.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-line text-sand transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-sand transition-colors duration-300 hover:text-ivory"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line/60 pt-8 md:flex-row md:items-center">
          <p className="text-xs tracking-wide text-taupe">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((brand) => (
              <span
                key={brand}
                className="flex h-7 items-center gap-1 border border-line px-2.5 text-[9px] font-bold tracking-widest text-sand"
              >
                {brand === 'PAYPAL' ? <Landmark className="h-3 w-3" /> : <CreditCard className="h-3 w-3" />}
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
