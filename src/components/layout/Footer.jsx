import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

const shopLinks = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
]

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Care Guide', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Journal', href: '/journal' },
  { label: 'Press', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-velmora-deep text-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="font-serif text-3xl tracking-wide inline-block">
              VELMORA
            </Link>
            <p className="text-velmora-taupe text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry designed to be treasured. Crafted in 18k gold plate,
              made for everyday luxury and moments worth remembering.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-velmora-hairline-dark flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-velmora-hairline-dark flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-widest-xl font-medium mb-6 text-velmora-cream/80">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-taupe hover:text-velmora-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest-xl font-medium mb-6 text-velmora-cream/80">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-velmora-taupe hover:text-velmora-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest-xl font-medium mb-6 text-velmora-cream/80">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-taupe hover:text-velmora-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-hairline-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-taupe">Visa</span>
            <span className="text-xs text-velmora-taupe">Mastercard</span>
            <span className="text-xs text-velmora-taupe">Amex</span>
            <span className="text-xs text-velmora-taupe">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
