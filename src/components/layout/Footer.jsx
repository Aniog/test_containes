import { Instagram, Facebook, PinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
    { label: 'Gift Sets', to: '/shop?category=Sets' },
  ],
  Help: [
    { label: 'Shipping', to: '/about' },
    { label: 'Returns', to: '/about' },
    { label: 'FAQ', to: '/journal' },
    { label: 'Contact', to: '/about' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Careers', to: '/about' },
    { label: 'Stockists', to: '/about' },
  ],
}

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const Footer = () => {
  return (
    <footer className="border-t border-velmora-line bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_repeat(3,1fr)] md:px-8">
        <div>
          <Link to="/" className="font-display text-3xl tracking-[0.4em] text-velmora-ivory">
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/72">
            Elevated demi-fine jewelry for everyday rituals, thoughtful gifting,
            and pieces crafted to be treasured.
          </p>
          <div className="mt-6 flex items-center gap-3 text-velmora-ivory/80">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:text-velmora-champagne"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:text-velmora-champagne"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="transition hover:text-velmora-champagne"
            >
              <PinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {Object.entries(footerColumns).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-xs uppercase tracking-[0.34em] text-velmora-ivory/55">
              {heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-velmora-ivory/80 transition hover:text-velmora-champagne">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-velmora-line/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-sm text-velmora-ivory/65 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-velmora-ivory/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-velmora-ivory/80"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
