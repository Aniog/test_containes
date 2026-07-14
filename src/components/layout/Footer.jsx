import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'New In', to: '/shop?sort=newest' },
    { label: 'Bestsellers', to: '/#bestsellers' },
    { label: 'Gift Sets', to: '/shop?category=Sets' },
    { label: 'Gift Cards', to: '/#newsletter' },
  ],
  Help: [
    { label: 'Shipping', to: '/#shipping' },
    { label: 'Returns', to: '/#shipping' },
    { label: 'Care Guide', to: '/#about' },
    { label: 'Contact', to: '/#newsletter' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
    { label: 'Sustainability', to: '/#about' },
    { label: 'Stockists', to: '/shop' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', externalLabel: 'Velmora on Instagram' },
  { label: 'Facebook', href: 'https://facebook.com', externalLabel: 'Velmora on Facebook' },
  { label: 'Pinterest', href: 'https://pinterest.com', externalLabel: 'Velmora on Pinterest' },
]

function Footer() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="inline-block font-display text-3xl tracking-[0.42em]">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Demi-fine jewelry designed to feel treasured now and for years to come.
            Quietly luxurious pieces for gifting and everyday self-celebration.
          </p>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/80">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.externalLabel}
                className="rounded-full border border-white/15 px-4 py-2 transition hover:border-velmora-gold hover:text-velmora-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, items]) => (
          <div key={title} className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.34em] text-white/55">{title}</h3>
            <ul className="space-y-3 text-sm text-white/78">
              {items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition hover:text-velmora-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.28em] text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="rounded border border-white/15 px-2 py-1">Visa</span>
            <span className="rounded border border-white/15 px-2 py-1">Mastercard</span>
            <span className="rounded border border-white/15 px-2 py-1">AmEx</span>
            <span className="rounded border border-white/15 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
