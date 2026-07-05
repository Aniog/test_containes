import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const SHOP_LINKS = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=Earrings' },
  { label: 'Necklaces', href: '/shop?category=Necklaces' },
  { label: 'Huggies', href: '/shop?category=Huggies' },
  { label: 'Gift Sets', href: '/shop?category=Sets' },
]

const HELP_LINKS = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Care Guide', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'Our Story', href: '/about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Journal', href: '/journal' },
  { label: 'Press', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] font-medium"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm font-light text-cream/80 max-w-xs leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted in small
              batches with 18k gold plating and thoughtful detail.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-ui font-medium text-cream/60 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-light text-cream/90 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-ui font-medium text-cream/60 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-cream/90 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-ui font-medium text-cream/60 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-light text-cream/90 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
