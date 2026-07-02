import { Camera, Instagram, Music2, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'Care Guide', to: '/journal' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Collections', to: '/collections' },
      { label: 'Gift Edit', to: '/shop' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr,1fr] lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="font-display text-3xl tracking-[0.34em] text-stone-50">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-stone-300">
            Demi-fine gold jewelry designed for self-purchase, gifting, and the quiet confidence of everyday rituals.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.24em] text-stone-200">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-white/15 px-3 py-2"
              >
                {payment}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 text-stone-300">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Camera, label: 'Pinterest' },
              { Icon: Send, label: 'Telegram' },
              { Icon: Music2, label: 'TikTok' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-200 hover:text-amber-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400">
                {group.title}
              </h3>
              <div className="space-y-3 text-sm text-stone-300">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block transition hover:text-stone-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
