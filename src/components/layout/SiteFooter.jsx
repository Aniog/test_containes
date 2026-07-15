import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
  ],
  Help: [
    { label: 'Shipping', to: '/about' },
    { label: 'Returns', to: '/about' },
    { label: 'Gift Guide', to: '/journal' },
  ],
  Company: [
    { label: 'About Velmora', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Contact', to: '/about' },
  ],
}

export default function SiteFooter() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.2fr,2fr] lg:px-8">
        <div className="space-y-5">
          <Link className="font-serif text-4xl tracking-product text-velmora-ivory" to="/">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-ivory/70">
            Demi-fine jewelry designed for self-purchase, meaningful gifting, and daily rituals that feel a touch more elevated.
          </p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-eyebrow text-velmora-gold">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-velmora-mist/20 px-3 py-2 text-velmora-ivory/75"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
                {title}
              </p>
              <div className="mt-5 space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    className="block text-sm text-velmora-ivory/75 transition hover:text-velmora-gold"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-mist/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-velmora-ivory/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-5 uppercase tracking-product text-xs">
            {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
              <a href="/" key={social} onClick={(event) => event.preventDefault()}>
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
