import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { footerGroups } from '@/data/siteContent'

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal']

export default function Footer() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-5">
          <Link
            to="/"
            className="font-display text-3xl tracking-[0.35em] text-velmora-ivory"
          >
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-muted">
            Quietly luxurious demi-fine jewelry for gifting, self-styling, and
            everyday rituals that deserve a little glow.
          </p>
          <div className="flex items-center gap-3 text-velmora-muted">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <Youtube className="h-4 w-4" />
          </div>
        </div>

        {Object.entries(footerGroups).map(([title, links]) => (
          <div key={title} className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-ivory">
              {title}
            </h3>
            <ul className="space-y-3 text-sm text-velmora-muted">
              {links.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="transition hover:text-velmora-ivory">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-velmora-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-velmora-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="rounded-full border border-velmora-line px-3 py-1 text-xs uppercase tracking-[0.2em] text-velmora-ivory"
              >
                {icon}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
