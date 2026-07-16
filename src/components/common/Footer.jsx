import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/shop' },
      { label: 'Returns', to: '/shop' },
      { label: 'Care Guide', to: '/#story' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Sustainability', to: '/#story' },
      { label: 'Stockists', to: '/shop' },
    ],
  },
]

const Footer = () => (
  <footer className="bg-velmora-espresso text-velmora-ivory">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <Link to="/" className="font-serif text-4xl font-semibold tracking-nav text-velmora-ivory">
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-stone">
            Demi-fine gold jewelry made for the rituals of gifting, layering, and everyday self-adornment.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Music2, Mail].map((Icon, index) => (
              <a
                key={index}
                href="/#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne"
                aria-label="Velmora social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-nav text-velmora-champagne">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-velmora-stone transition hover:text-velmora-champagne">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-6 text-sm text-velmora-stone md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex items-center gap-2" aria-label="Accepted payment methods">
          {['VISA', 'MC', 'AMEX', 'PAY'].map((card) => (
            <span key={card} className="rounded border border-white/20 px-2.5 py-1 text-[0.65rem] font-bold tracking-nav text-velmora-ivory">
              {card}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
