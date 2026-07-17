import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const SHOP_LINKS = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
]

const HELP_LINKS = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Care Guide', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-velmora-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl font-semibold uppercase tracking-[0.18em] text-velmora-base">
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-velmora-text-secondary">
              Demi-fine gold jewelry designed to be treasured. Made for everyday moments and unforgettable occasions.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-velmora-text-secondary transition-colors hover:text-velmora-base" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-text-secondary transition-colors hover:text-velmora-base" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-text-secondary transition-colors hover:text-velmora-base" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
              Shop
            </h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-velmora-text-secondary transition-colors hover:text-velmora-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
              Help
            </h4>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-velmora-text-secondary transition-colors hover:text-velmora-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-velmora-text-secondary transition-colors hover:text-velmora-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 lg:flex-row">
          <p className="text-xs text-velmora-text-secondary">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="rounded border border-stone-200 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-velmora-text-secondary">
              Visa
            </span>
            <span className="rounded border border-stone-200 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-velmora-text-secondary">
              Mastercard
            </span>
            <span className="rounded border border-stone-200 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-velmora-text-secondary">
              Amex
            </span>
            <span className="rounded border border-stone-200 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-velmora-text-secondary">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
