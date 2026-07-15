import { Instagram, Music2, Twitter } from 'lucide-react'
import { footerLinks } from '@/data/products'

export default function Footer() {
  return (
    <footer className="border-t border-champagne/50 bg-espresso px-5 py-14 text-ivory sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="space-y-5">
          <p className="font-serif text-3xl tracking-[0.35em] text-ivory">VELMORA</p>
          <p className="max-w-md text-sm leading-7 text-champagne">
            Demi-fine pieces designed for daily wear, memorable gifting, and the kind of polish that stays with you.
          </p>
          <div className="flex items-center gap-3 text-champagne">
            <span className="rounded-full border border-champagne/40 px-3 py-2 text-xs uppercase tracking-[0.22em]">
              Visa
            </span>
            <span className="rounded-full border border-champagne/40 px-3 py-2 text-xs uppercase tracking-[0.22em]">
              Mastercard
            </span>
            <span className="rounded-full border border-champagne/40 px-3 py-2 text-xs uppercase tracking-[0.22em]">
              Amex
            </span>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.28em] text-gold">{title}</h3>
              <ul className="space-y-3 text-sm text-champagne">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-ivory">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-6 border-t border-champagne/20 pt-6 text-sm text-champagne md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="transition hover:text-ivory">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="TikTok" className="transition hover:text-ivory">
            <Music2 className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="transition hover:text-ivory">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
