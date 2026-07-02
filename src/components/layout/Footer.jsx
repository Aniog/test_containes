import { Instagram, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/shop' },
      { label: 'Contact Us', to: '/#newsletter' },
      { label: 'Gift Packaging', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/#about' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Care Guide', to: '/#about' },
    ],
  },
]

const paymentOptions = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const Footer = () => {
  return (
    <footer className="border-t border-velmora-line bg-velmora-sand">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1.8fr] lg:px-10">
        <div className="space-y-5">
          <Link to="/" className="font-display text-3xl tracking-[0.42em] text-velmora-ink">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-velmora-muted">
            Thoughtfully designed demi-fine jewelry for everyday rituals, meaningful gifting, and a polished glow that lasts beyond the moment.
          </p>
          <div className="flex items-center gap-3 text-velmora-ink">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-xs font-semibold uppercase tracking-[0.24em] transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              P
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              <Music2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-luxury text-velmora-gold">
                {column.title}
              </h3>
              <div className="space-y-3 text-sm text-velmora-muted">
                {column.links.map((link) => (
                  <a key={link.label} href={link.to} className="block transition hover:text-velmora-ink">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-line">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-4 px-4 py-5 text-sm text-velmora-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap gap-2">
            {paymentOptions.map((option) => (
              <span
                key={option}
                className="rounded-full border border-velmora-line px-3 py-1 text-xs uppercase tracking-luxury text-velmora-ink"
              >
                {option}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
