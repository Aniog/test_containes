import { Facebook, Instagram, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/#newsletter' },
      { label: 'Returns', to: '/#newsletter' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Care Guide', to: '/#story' },
    ],
  },
]

const paymentBadges = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const Footer = () => {
  return (
    <footer className="border-t border-velmora-mist/60 bg-velmora-espresso text-velmora-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="font-display text-3xl tracking-[0.35em] text-velmora-paper">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-paper/70">
            Demi-fine gold jewelry designed for slow mornings, meaningful gifting,
            and the polished rituals of everyday dressing.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-paper/20 text-velmora-paper transition hover:bg-velmora-paper hover:text-velmora-espresso"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-paper/20 text-velmora-paper transition hover:bg-velmora-paper hover:text-velmora-espresso"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-paper/60">
              {column.title}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-velmora-paper/80">
              {column.links.map((link) => (
                <Link key={link.label} to={link.to} className="transition hover:text-velmora-paper">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-velmora-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap gap-2">
            {paymentBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-velmora-paper/20 px-3 py-1 text-xs uppercase tracking-[0.22em] text-velmora-paper/70"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-velmora-paper/60">
            Crafted in small runs <MoveRight className="h-3.5 w-3.5" /> Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
