import { Facebook, Instagram, PinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'New Arrivals', href: '/shop' },
    { label: 'Bestsellers', href: '/shop' },
    { label: 'Gift Sets', href: '/shop' },
    { label: 'Necklaces', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping', href: '/#journal' },
    { label: 'Returns', href: '/#journal' },
    { label: 'Care Guide', href: '/#journal' },
    { label: 'FAQ', href: '/#journal' },
  ],
  Company: [
    { label: 'About Us', href: '/#story' },
    { label: 'Journal', href: '/#journal' },
    { label: 'Contact', href: '/#journal' },
    { label: 'Stockists', href: '/#journal' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: PinIcon },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-noir px-5 pb-10 pt-14 text-cream md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1.8fr]">
        <div className="space-y-6">
          <Link to="/" className="font-display text-[1.75rem] tracking-[0.38em] text-cream">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-cream/70">
            Demi-fine jewelry designed for everyday ritual, thoughtful gifting, and the kind of shine you keep reaching for.
          </p>
          <div className="flex items-center gap-4 text-cream/70">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">{title}</h3>
              <ul className="space-y-3 text-sm text-cream/75">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="transition hover:text-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-cream/50 md:flex-row md:items-center md:justify-between">
        <p>Visa · Mastercard · Amex · PayPal</p>
        <p>© 2026 Velmora Fine Jewelry</p>
      </div>
    </footer>
  )
}
