import { footerGroups, paymentMethods, socialLinks } from '@/data/storefront'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-24 bg-shadow text-cream">
      <div className="page-shell py-16">
        <div className="grid gap-12 border-b border-cream/15 pb-12 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-5">
            <Link className="font-display text-2xl tracking-brand" to="/">
              VELMORA
            </Link>
            <p className="max-w-sm text-sm leading-7 text-cream/75">
              Quiet luxury jewelry crafted for gifting, layering, and everyday rituals.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-micro text-cream/70">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="rounded-full border border-cream/15 px-3 py-2"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm uppercase tracking-micro text-cream/60">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm text-cream/85">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition hover:text-accent" to={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 pt-6 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a key={link.label} className="transition hover:text-accent" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
