import { Link } from 'react-router-dom'
import { footerColumns } from '@/data/products'
import { paymentMethods, socialLinks } from '@/data/storefront'

export default function Footer() {
  return (
    <footer className="bg-velmora-ink px-4 pb-10 pt-16 text-velmora-ivory md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-velmora-ivory/10 pb-12 md:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div className="space-y-5">
          <Link to="/" className="font-serif text-3xl tracking-[0.32em]">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-ivory/70">
            Demi-fine gold jewelry designed for everyday rituals, modern gifting, and quiet confidence.
          </p>
        </div>

        {Object.entries(footerColumns).map(([title, links]) => (
          <div key={title} className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold/80">
              {title}
            </h3>
            <ul className="space-y-3 text-sm text-velmora-ivory/75">
              {links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 pt-8 text-sm text-velmora-ivory/65 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-velmora-ivory/10 px-4 py-2 text-xs uppercase tracking-[0.22em]"
            >
              {method}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 uppercase tracking-[0.22em] text-velmora-ivory/75">
          {socialLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
