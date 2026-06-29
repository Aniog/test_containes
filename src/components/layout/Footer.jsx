import { Instagram, Facebook, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Privacy'],
}

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-ink)] text-[var(--color-text-on-dark)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-12">
        <div className="space-y-5">
          <Link to="/" className="font-serif-display text-3xl tracking-[0.45em] text-[var(--color-text-on-dark)]">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-[var(--color-text-on-dark-muted)]">
            Elevated demi-fine gold jewelry designed for self-gifting, daily rituals, and milestone moments.
          </p>
          <div className="flex items-center gap-3 text-[var(--color-text-on-dark-muted)]">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <Music2 className="h-4 w-4" />
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, items]) => (
          <div key={title} className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">
              {title}
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-on-dark-muted)]">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.26em] text-[var(--color-text-on-dark-muted)] md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-white/10 px-3 py-2">Visa</span>
            <span className="border border-white/10 px-3 py-2">Mastercard</span>
            <span className="border border-white/10 px-3 py-2">AmEx</span>
            <span className="border border-white/10 px-3 py-2">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
