import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Gift Sets', to: '/shop?category=Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '/about' },
      { label: 'Care Guide', to: '/about' },
      { label: 'Contact', to: '/journal' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Privacy', to: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t hairline-divider bg-white/60">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div className="space-y-5">
          <Link to="/" className="font-serif text-3xl tracking-luxeWide text-velmora-noir">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-espresso/75">
            Quietly luxurious demi-fine jewelry designed to be worn every day and treasured for years.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/70">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-espresso/10 bg-velmora-parchment px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-luxe text-velmora-noir">
              {column.title}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-velmora-espresso/75">
              {column.links.map((link) => (
                <Link key={link.label} to={link.to} className="transition hover:text-velmora-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t hairline-divider bg-velmora-parchment/80">
        <div className="container-shell flex flex-col gap-4 py-5 text-xs uppercase tracking-luxe text-velmora-espresso/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-velmora-gold">Instagram</a>
            <a href="#" className="transition hover:text-velmora-gold">Pinterest</a>
            <a href="#" className="transition hover:text-velmora-gold">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
