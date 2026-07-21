import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Care Guide', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '#' },
    { label: 'Stockists', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold uppercase tracking-brand text-charcoal"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warmgray">
              Demi-fine jewelry crafted to be treasured. Designed for everyday luxury and
              memorable gifting.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-warmgray transition-colors hover:text-charcoal"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-warmgray transition-colors hover:text-charcoal"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-warmgray transition-colors hover:text-charcoal"
                aria-label="Twitter"
              >
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-warmgray transition-colors hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 md:flex-row">
          <p className="text-xs text-warmgray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="rounded border border-hairline px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-warmgray">
              Visa
            </span>
            <span className="rounded border border-hairline px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-warmgray">
              Mastercard
            </span>
            <span className="rounded border border-hairline px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-warmgray">
              Amex
            </span>
            <span className="rounded border border-hairline px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-warmgray">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
