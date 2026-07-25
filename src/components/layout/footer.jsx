import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Gift Sets', to: '/shop?category=Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', to: '/journal' },
      { label: 'Returns & Exchanges', to: '/journal' },
      { label: 'Jewelry Care', to: '/journal' },
      { label: 'Size Guide', to: '/journal' },
      { label: 'Contact Us', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Materials', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Collections', to: '/collections' },
    ],
  },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
  { label: 'YouTube', href: 'https://youtube.com', Icon: Youtube },
]

const PAYMENTS = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-semibold uppercase tracking-[0.3em] text-cream"
            >
              Velmora
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine jewelry in warm 18K gold — designed in small batches,
              crafted to be treasured every day.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/80 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-luxe text-gold">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2" aria-label="Accepted payments">
            {PAYMENTS.map((payment) => (
              <li
                key={payment}
                className="border border-cream/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/70"
              >
                {payment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
