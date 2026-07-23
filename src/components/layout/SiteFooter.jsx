import { CreditCard, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Journal', 'Stockists', 'Careers'],
  },
]

const SiteFooter = () => {
  return (
    <footer className="border-t border-sand/40 bg-obsidian text-pearl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)] md:px-8">
        <div>
          <Link to="/" className="font-display text-3xl tracking-brand text-porcelain">
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-sand">
            Demi-fine gold jewelry designed for everyday rituals, thoughtful gifts,
            and quietly polished evenings.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sand">
            <a
              href="https://instagram.com"
              className="inline-flex items-center gap-2 rounded-full border border-sand/20 px-3 py-2 text-xs uppercase tracking-[0.18em] transition duration-300 hover:border-champagne hover:text-champagne"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://pinterest.com"
              className="inline-flex items-center gap-2 rounded-full border border-sand/20 px-3 py-2 text-xs uppercase tracking-[0.18em] transition duration-300 hover:border-champagne hover:text-champagne"
            >
              <span className="font-medium">P</span>
              Pinterest
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs uppercase tracking-[0.22em] text-champagne">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-sand">
              {group.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-sand/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs uppercase tracking-[0.16em] text-sand md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-sand/20 px-3 py-1"
              >
                <CreditCard className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
