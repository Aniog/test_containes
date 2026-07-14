import { Instagram, Music2, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = {
  Shop: ['New In', 'Bestsellers', 'Earrings', 'Necklaces'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Gift Cards', 'Privacy'],
}

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-velmora-panel text-velmora-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Link to="/" className="font-display text-3xl tracking-[0.35em] text-velmora-cream">
            VELMORA
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-velmora-cream/72">
            Demi-fine jewelry designed for the women who collect pieces with feeling. Elevated gifting, everyday glow, and a signature warm finish.
          </p>
          <div className="mt-8 flex items-center gap-3 text-velmora-cream/80">
            <a href="/" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="/" aria-label="TikTok" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10">
              <Music2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerGroups).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">
                {title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-cream/72">
                {links.map((link) => (
                  <li key={link}>
                    <a href="/" className="transition hover:text-velmora-cream">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-velmora-cream/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. Quiet luxury, made wearable.</p>
          <div className="flex items-center gap-3">
            <CreditCard className="h-4 w-4" />
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
