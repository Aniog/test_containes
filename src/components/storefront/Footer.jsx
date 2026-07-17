import { BadgeDollarSign, CircleDollarSign, CreditCard, Instagram, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/storefrontContent'

function Footer() {
  return (
    <footer className="bg-espresso px-4 pb-10 pt-16 text-pearl sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_repeat(3,0.7fr)]">
        <div className="space-y-5">
          <Link
            to="/"
            className="font-serif text-3xl font-semibold tracking-[0.32em] text-pearl"
          >
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-pearl/72">
            Demi-fine jewelry designed for the soft glow of everyday rituals,
            meaningful gifts, and pieces that stay in rotation.
          </p>
          <div className="flex items-center gap-3 text-pearl/70">
            <Link
              to="/#journal"
              aria-label="Velmora Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light transition hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              to="/#journal"
              aria-label="Velmora social videos"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light transition hover:border-gold hover:text-gold"
            >
              <Music2 className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title} className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.28em] text-pearl/60">
              {title}
            </h3>
            <ul className="space-y-3 text-sm text-pearl/82">
              {items.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-6 border-t border-hairline-light pt-6 text-sm text-pearl/68 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light">
            <CreditCard className="h-4 w-4" />
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light">
            <BadgeDollarSign className="h-4 w-4" />
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light">
            <CircleDollarSign className="h-4 w-4" />
          </span>
        </div>
        <p>© 2026 Velmora Fine Jewelry. Crafted for gifting and self-keeping.</p>
      </div>
    </footer>
  )
}

export default Footer
