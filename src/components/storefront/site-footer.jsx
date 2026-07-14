import { Gem, Instagram, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['New In', 'Bestsellers', 'Gift Sets', 'Necklaces'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Privacy'],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100/70 text-stone-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr,2fr]">
          <div className="space-y-4">
            <p className="font-serif text-2xl tracking-[0.35em] text-stone-950">VELMORA</p>
            <p className="max-w-sm text-sm leading-7 text-stone-600">
              Demi-fine jewelry designed for everyday glow, milestone gifting, and the rituals of getting dressed beautifully.
            </p>
            <div className="flex items-center gap-3 text-stone-600">
              <a href="/" aria-label="Instagram" className="rounded-full border border-stone-300 p-2 transition hover:border-stone-500 hover:text-stone-950">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="/" aria-label="Jewelry notes" className="rounded-full border border-stone-300 p-2 transition hover:border-stone-500 hover:text-stone-950">
                <Gem className="h-4 w-4" />
              </a>
              <a href="/" aria-label="Editorial" className="rounded-full border border-stone-300 p-2 transition hover:border-stone-500 hover:text-stone-950">
                <Sparkles className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{title}</p>
                <div className="space-y-3">
                  {links.map((link) => (
                    <Link
                      key={link}
                      to="/shop"
                      className="block text-sm text-stone-700 transition hover:text-stone-950"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-stone-200 pt-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-600">
            <span className="rounded-full border border-stone-300 px-3 py-2">Visa</span>
            <span className="rounded-full border border-stone-300 px-3 py-2">Mastercard</span>
            <span className="rounded-full border border-stone-300 px-3 py-2">Amex</span>
            <span className="rounded-full border border-stone-300 px-3 py-2">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
