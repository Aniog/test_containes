import { Instagram, Music2, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', href: '/shop' },
      { label: 'Care Guide', href: '#journal' },
      { label: 'FAQ', href: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', href: '#about' },
      { label: 'Journal', href: '#journal' },
      { label: 'Contact', href: '/shop' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-mist/80 bg-velmora-ink text-velmora-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div>
            <Link to="/" className="font-display text-3xl tracking-[0.28em] text-velmora-soft">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-soft/75">
              Premium demi-fine gold jewelry designed for thoughtful gifting, everyday polish, and a quietly luxurious finish.
            </p>
            <div className="mt-8 flex items-center gap-3 text-velmora-soft/75">
              <Instagram className="h-5 w-5" />
              <Music2 className="h-5 w-5" />
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-velmora-soft">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-soft/75">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href.startsWith('#') ? `/${link.href}` : link.href} className="transition hover:text-velmora-soft">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-velmora-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <CreditCard className="h-4 w-4" />
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
