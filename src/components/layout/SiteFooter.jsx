import { Instagram, Youtube, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Bestsellers', to: '/shop' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/shop' },
      { label: 'Returns', to: '/shop' },
      { label: 'Care Guide', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/' },
      { label: 'Journal', to: '/' },
      { label: 'Contact', to: '/' },
    ],
  },
]

const paymentBadges = ['Visa', 'Mastercard', 'AmEx', 'PayPal']

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-velvet text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_repeat(3,1fr)] md:px-10 xl:px-16">
        <div className="space-y-4">
          <Link to="/" className="font-serif text-4xl tracking-[0.18em] text-ivory">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-ivory-deep/75">
            Premium demi-fine jewelry designed to be worn daily, gifted beautifully, and treasured for years.
          </p>
          <div className="flex items-center gap-3 text-ivory-deep/80">
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 p-2 transition hover:border-gold hover:text-gold">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-white/10 p-2 transition hover:border-gold hover:text-gold">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/10 p-2 transition hover:border-gold hover:text-gold">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-xs uppercase tracking-eyebrow text-ivory-deep/55">{group.title}</h3>
            <ul className="space-y-3 text-sm text-ivory-deep/80">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 text-xs text-ivory-deep/60 md:flex-row md:items-center md:justify-between md:px-10 xl:px-16">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {paymentBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 px-3 py-1">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
