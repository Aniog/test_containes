import { Instagram, Facebook, PinIcon as Pinterest, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
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
      { label: 'Shipping & Returns', to: '/shop' },
      { label: 'Care Guide', to: '/#story' },
      { label: 'Gift Cards', to: '/shop' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Stockists', to: '/shop' },
      { label: 'Terms', to: '/shop' },
    ],
  },
]

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const SiteFooter = () => {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-surface)]">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-12 px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:items-start">
          <div className="space-y-4">
            <Link to="/" className="font-display text-3xl tracking-[0.35em] text-[var(--color-surface)]">
              VELMORA
            </Link>
            <p className="max-w-md text-sm leading-7 text-[var(--color-surface-muted)]">
              Demi-fine gold jewelry designed for everyday rituals, thoughtful gifting, and quietly luxurious moments.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[var(--color-surface)]">
              <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-[color:var(--color-border-soft)] p-3 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-[color:var(--color-border-soft)] p-3 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest" className="rounded-full border border-[color:var(--color-border-soft)] p-3 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
                <Pinterest className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.28em] text-[var(--color-surface)]">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-sm text-[var(--color-surface-muted)]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="transition hover:text-[var(--color-accent)]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[color:var(--color-border-soft)] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-soft)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-surface)]"
              >
                <CreditCard className="h-3.5 w-3.5" />
                {method}
              </span>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-surface-muted)]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
