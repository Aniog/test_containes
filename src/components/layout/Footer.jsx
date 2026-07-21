import { Link } from 'react-router-dom'
import { CreditCard, Facebook, Instagram, Landmark, Music2, Twitter, Wallet } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/product/royal-heirloom-set' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/journal' },
      { label: 'Jewelry Care', to: '/journal' },
      { label: 'Size Guide', to: '/journal' },
      { label: 'Contact Us', to: '/journal' },
      { label: 'FAQ', to: '/journal' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Stockists', to: '/about' },
    ],
  },
]

const SOCIALS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Music2, label: 'TikTok' },
  { icon: Twitter, label: 'Pinterest' },
]

const PAYMENTS = [
  { icon: CreditCard, label: 'Cards' },
  { icon: Landmark, label: 'Bank transfer' },
  { icon: Wallet, label: 'Wallets' },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-bg">
      <div className="velmora-container grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8 md:py-20">
        <div>
          <Link
            to="/"
            className="font-display text-2xl font-semibold uppercase tracking-[0.4em] text-velmora-ink"
          >
            Velmora
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-velmora-muted">
            Demi-fine jewelry crafted to be treasured — 18K gold plated,
            hypoallergenic, and designed to move with you from morning to
            candlelight.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-velmora-line text-velmora-muted transition-all duration-300 hover:border-velmora-gold hover:text-velmora-gold"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-velmora-gold">
              {col.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-velmora-muted transition-colors duration-300 hover:text-velmora-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-velmora-line">
        <div className="velmora-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs tracking-wide text-velmora-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-velmora-muted">
            {PAYMENTS.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5" title={label}>
                <Icon className="h-5 w-5" strokeWidth={1.25} />
                <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
