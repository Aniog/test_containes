import { Link } from 'react-router-dom'
import { footerColumns } from '@/data/store'

const paymentMethods = ['Visa', 'Mastercard', 'AmEx', 'PayPal']
const socialLinks = ['Instagram', 'Pinterest', 'TikTok']

const SiteFooter = () => {
  return (
    <footer className="border-t border-velmora-sand/70 bg-velmora-mist text-velmora-ink">
      <div className="page-shell grid gap-12 py-14 md:grid-cols-[1.3fr,2fr] md:py-20">
        <div className="space-y-6">
          <Link
            to="/"
            className="inline-block font-heading text-3xl tracking-[0.35em]"
          >
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-velmora-ink/70">
            Demi-fine jewelry designed for everyday rituals, quiet statements,
            and gifting moments that feel beautifully considered.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-velmora-ink/65">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-velmora-ink/10 px-3 py-2"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-5 text-xs uppercase tracking-[0.35em] text-velmora-gold">
                {title}
              </h3>
              <ul className="space-y-4 text-sm text-velmora-ink/75">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-velmora-gold">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="hairline-divider" />

      <div className="page-shell flex flex-col gap-4 py-6 text-xs uppercase tracking-[0.26em] text-velmora-ink/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velmora Fine Jewelry</p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((social) => (
            <a key={social} href="#" className="transition-colors hover:text-velmora-gold">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
