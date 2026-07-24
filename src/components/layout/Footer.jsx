import { CreditCard, Gem, Instagram, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerColumns, paymentMethods } from '@/data/siteContent?content=v3'

const socialLinks = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'Pinterest', icon: Gem, href: 'https://pinterest.com' },
  { label: 'TikTok', icon: Music2, href: 'https://tiktok.com' },
]

const footerHrefFallbacks = {
  'New Arrivals': '/shop',
  Bestsellers: '/shop',
  'Gift Sets': '/shop?category=Gift%20Sets',
  Earrings: '/shop?category=Earrings',
  Shipping: '/#benefits',
  Returns: '/#benefits',
  'Care Guide': '/#journal',
  FAQ: '/#journal',
  'About Velmora': '/#story',
  Journal: '/#journal',
  Contact: 'mailto:hello@velmorafinejewelry.com',
  Privacy: 'mailto:privacy@velmorafinejewelry.com?subject=Privacy%20Request',
}

const resolveFooterLink = (link) => {
  if (typeof link === 'string') {
    return {
      label: link,
      href: footerHrefFallbacks[link] ?? '/shop',
    }
  }

  return link
}

const Footer = () => {
  return (
    <footer className="border-t border-velmora-line bg-velmora-ivory px-4 pb-8 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div className="max-w-md">
          <div className="font-display text-3xl tracking-[0.32em] text-velmora-ink">VELMORA</div>
          <p className="mt-5 text-sm leading-7 text-velmora-mist">
            Quiet luxury jewelry for everyday rituals, meaningful gifting, and pieces crafted to be treasured.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line bg-velmora-pearl text-velmora-ink transition hover:border-velmora-bronze hover:text-velmora-bronze"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-mist">
                {column.links.map((item) => {
                  const link = resolveFooterLink(item)
                  const isInternal = link.href.startsWith('/')

                  return (
                    <li key={link.label}>
                      {isInternal ? (
                        <Link to={link.href} className="transition hover:text-velmora-ink">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="transition hover:text-velmora-ink">
                          {link.label}
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-velmora-line pt-6 text-xs uppercase tracking-[0.24em] text-velmora-mist sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {paymentMethods.map((method) => (
            <span key={method} className="inline-flex items-center gap-2 rounded-full border border-velmora-line bg-velmora-pearl px-3 py-2 text-[10px] text-velmora-ink">
              <CreditCard className="h-3.5 w-3.5" />
              {method}
            </span>
          ))}
        </div>
        <p>© 2026 Velmora Fine Jewelry</p>
      </div>
    </footer>
  )
}

export default Footer
