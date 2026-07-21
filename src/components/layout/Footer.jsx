import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/shop' },
      { label: 'Care Guide', to: '/shop' },
      { label: 'Size Guide', to: '/shop' },
      { label: 'Contact Us', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Sustainability', to: '/#story' },
      { label: 'Reviews', to: '/#reviews' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-[0.35em]">VELMORA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              Demi-fine gold jewelry, crafted to be treasured. Designed in small
              batches, plated in 18K gold, made for every day.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-fog transition-colors hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-fog transition-colors hover:text-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-fog transition-colors hover:text-gold">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-fog transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-line-dark pt-8 md:flex-row">
          <p className="text-xs text-fog">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-fog">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs tracking-wide">Visa · Mastercard · Amex · PayPal · Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
