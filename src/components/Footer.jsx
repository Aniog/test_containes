import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/Container'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'Care Guide', to: '/journal' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Collections', to: '/collections' },
      { label: 'Gift Edit', to: '/shop?category=Sets' },
    ],
  },
]

const paymentPills = ['Visa', 'Mastercard', 'AmEx', 'PayPal']

const Footer = () => {
  return (
    <footer className="border-t border-brand-line bg-brand-ivory py-14 text-brand-espresso">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Link to="/" className="font-serif text-3xl tracking-[0.28em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-7 text-brand-mink">
              Demi-fine gold jewelry designed for everyday elegance, thoughtful gifting, and quiet confidence.
            </p>
            <div className="mt-6 flex items-center gap-3 text-brand-espresso">
              <a href="#" className="rounded-full border border-brand-line p-2 transition hover:border-brand-bronze hover:text-brand-bronze" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-brand-line p-2 transition hover:border-brand-bronze hover:text-brand-bronze" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-brand-line p-2 transition hover:border-brand-bronze hover:text-brand-bronze" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs uppercase tracking-[0.28em] text-brand-bronze">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-brand-mink">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="transition hover:text-brand-espresso">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-brand-line pt-6 text-sm text-brand-mink md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {paymentPills.map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-brand-line bg-brand-surface px-3 py-2 text-xs uppercase tracking-[0.2em] text-brand-espresso"
              >
                {payment}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
