import { Facebook, Instagram, Pin } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', href: '/shop' },
      { label: 'Returns', href: '/shop' },
      { label: 'Gift Guide', href: '/shop' },
      { label: 'Contact', href: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/#story' },
      { label: 'Journal', href: '/#journal' },
      { label: 'Materials', href: '/shop' },
      { label: 'Careers', href: '/shop' },
    ],
  },
]

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const SiteFooter = () => (
  <footer className="bg-velmora-noir text-velmora-ivory">
    <div className="section-wrap py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.7fr] lg:gap-16">
        <div>
          <Link to="/" className="font-serif text-3xl tracking-[0.35em] text-velmora-ivory">
            VELMORA
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-velmora-mist">
            Quiet luxury for every day. Demi-fine gold jewelry designed to feel personal, polished, and easy to gift.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {[Instagram, Facebook, Pin].map((Icon, index) => (
              <a
                key={index}
                href="/shop"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-ivory/15 text-velmora-ivory transition-colors duration-300 hover:border-velmora-champagne hover:text-velmora-champagne"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs uppercase tracking-brand text-velmora-mist">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-velmora-ivory/88">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition-colors duration-300 hover:text-velmora-champagne" to={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-6 border-t border-velmora-mist/15 pt-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-velmora-ivory/15 px-4 py-2 text-[11px] font-medium uppercase tracking-brand text-velmora-mist"
            >
              {method}
            </span>
          ))}
        </div>
        <p className="text-xs uppercase tracking-brand text-velmora-mist">
          © 2026 Velmora Fine Jewelry
        </p>
      </div>
    </div>
  </footer>
)

export default SiteFooter
