import { Instagram, Facebook, PinIcon as Pinterest, CreditCard } from 'lucide-react'
import { footerColumns } from '@/data/storeData.js'

function Footer() {
  return (
    <footer className="border-t border-stone-200/10 bg-stone-950 px-5 py-14 text-stone-300 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="space-y-5">
          <div>
            <p className="font-serif text-3xl tracking-[0.3em] text-stone-50">VELMORA</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-400">
              Demi-fine jewelry crafted for self-purchase, celebration, and the kind of everyday luxury that lasts beyond a season.
            </p>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <a href="#" aria-label="Instagram" className="transition hover:text-amber-200"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="transition hover:text-amber-200"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Pinterest" className="transition hover:text-amber-200"><Pinterest className="h-5 w-5" /></a>
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-xs uppercase tracking-[0.32em] text-stone-500">{title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-stone-50">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-stone-200/10 pt-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-stone-400">
          <CreditCard className="h-4 w-4" />
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>PayPal</span>
        </div>
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
