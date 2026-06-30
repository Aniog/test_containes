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

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] uppercase font-medium"
            >
              Velmora
            </Link>
            <p className="font-sans text-sm text-white/70 mt-4 max-w-sm leading-relaxed">
              Demi-fine gold jewelry designed for everyday elegance. Crafted to
              be treasured, gifted, and worn on repeat.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-white/70 hover:text-white transition-colors font-sans text-xs"
              >
                Pin
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] font-medium mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] font-medium mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] font-medium mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-white/50 uppercase tracking-wider">
              We accept
            </span>
            <div className="flex items-center gap-2">
              {['VISA', 'MC', 'Amex', 'PayPal'].map((brand) => (
                <span
                  key={brand}
                  className="bg-white/10 px-2 py-1 rounded text-[10px] font-sans text-white/80"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
