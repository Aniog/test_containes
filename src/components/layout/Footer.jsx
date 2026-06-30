import { Instagram, Facebook, Gem, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=Earrings' },
      { label: 'Necklaces', href: '/shop?category=Necklaces' },
      { label: 'Huggies', href: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', href: '/shop' },
      { label: 'Returns', href: '/shop' },
      { label: 'Care Guide', href: '/shop' },
      { label: 'Contact', href: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', href: '/' },
      { label: 'Journal', href: '/' },
      { label: 'Our Story', href: '/' },
      { label: 'Gift Cards', href: '/shop' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-ink text-brand-ivory">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:px-10">
        <div className="space-y-6">
          <Link to="/" className="font-display text-4xl tracking-[0.28em] text-brand-ivory">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-brand-ivory/75">
            Demi-fine gold jewelry designed for self-purchase, meaningful gifting,
            and polished everyday rituals.
          </p>
          <div className="flex items-center gap-3 text-brand-ivory/75">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Gem className="h-5 w-5" />
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title} className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.32em] text-brand-ivory/60">
              {group.title}
            </h3>
            <div className="flex flex-col gap-3">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-brand-ivory transition hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-brand-ivory/70 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <CreditCard className="h-4 w-4" />
            <span>Visa · Mastercard · Amex · PayPal</span>
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
