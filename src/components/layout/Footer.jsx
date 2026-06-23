import { Link } from 'react-router-dom'
import { CircleDot, Instagram, Music2 } from 'lucide-react'

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
      { label: 'Shipping', to: '/shop' },
      { label: 'Returns', to: '/shop' },
      { label: 'Gift Notes', to: '/shop' },
      { label: 'Care Guide', to: '/#journal' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Stockists', to: '/shop' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-hairline-dark bg-base px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="font-display text-3xl tracking-[0.38em] text-foreground-strong">
              VELMORA
            </Link>
            <p className="max-w-md text-sm leading-7 text-muted">
              Velmora Fine Jewelry creates premium-but-accessible demi-fine pieces designed for self-purchase, celebration, and thoughtful gifting.
            </p>
            <div className="flex items-center gap-3 text-muted">
              <a href="https://instagram.com" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-dark transition hover:border-accent hover:text-accent">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest" className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-dark transition hover:border-accent hover:text-accent">
                <CircleDot className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-dark transition hover:border-accent hover:text-accent">
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.24em] text-foreground">{column.title}</h3>
                <div className="space-y-3 text-sm text-muted">
                  {column.links.map((link) => (
                    <Link key={link.label} to={link.to} className="block transition hover:text-accent">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-hairline-dark pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((item) => (
              <span key={item} className="rounded-full border border-hairline-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground">
                {item}
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
