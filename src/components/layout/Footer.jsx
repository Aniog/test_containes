import { Instagram, Facebook, PinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['New In', 'Bestsellers', 'Gift Sets', 'All Jewelry'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Stockists', 'Careers'],
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line-dark)] bg-[var(--color-bg)] text-[var(--color-text-dark)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_2fr] md:px-8">
        <div className="space-y-5">
          <p className="font-serif text-2xl tracking-[0.28em]">VELMORA</p>
          <p className="max-w-sm text-sm leading-7 text-[var(--color-muted-dark)]">
            Thoughtfully made demi-fine jewelry for gifting, layering, and everyday polish.
          </p>
          <div className="flex items-center gap-4 text-[var(--color-muted-dark)]">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <PinIcon className="h-4 w-4" />
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">
                {title}
              </p>
              <div className="space-y-3 text-sm text-[var(--color-text-dark)]">
                {items.map((item) => (
                  <Link key={item} to="/shop" className="block transition hover:text-[var(--color-accent)]">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--color-line-dark)] px-5 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-[0.22em] text-[var(--color-muted-dark)] md:flex-row md:items-center md:justify-between">
          <span>Visa · Mastercard · Amex · Apple Pay</span>
          <span>© 2026 Velmora Fine Jewelry</span>
        </div>
      </div>
    </footer>
  )
}
