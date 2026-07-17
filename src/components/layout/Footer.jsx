import { Link } from 'react-router-dom'
import { footerLinks, socialLinks } from '@/data/products'

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal']

export default function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-noir text-brand-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.2fr_repeat(3,1fr)] md:px-8 lg:px-10">
        <div className="space-y-4">
          <div className="font-display text-3xl tracking-[0.36em]">VELMORA</div>
          <p className="max-w-sm text-sm leading-7 text-brand-cream/72">
            Demi-fine gold jewelry designed for gifting, layering, and the quiet confidence of everyday wear.
          </p>
          <div className="flex flex-wrap gap-2 pt-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-brand-cream/20 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-cream/78"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.28em] text-brand-cream/70">
              {heading}
            </h3>
            <ul className="space-y-3 text-sm text-brand-cream/82">
              {links.map((link) => (
                <li key={`${heading}-${link.label}`}>
                  <Link
                    to={link.href}
                    className="transition hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs uppercase tracking-[0.24em] text-brand-cream/58 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noreferrer' : undefined}
                className="transition hover:text-brand-gold"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
