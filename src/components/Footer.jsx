import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

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
  { label: 'Sizing', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.18em] text-velmora-cream inline-block mb-5"
            >
              VELMORA
            </Link>
            <p className="text-sm text-velmora-taupe leading-relaxed max-w-xs">
              Demi-fine gold jewelry designed to be worn every day and treasured forever.
            </p>
            <div className="flex items-center gap-5 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-velmora-taupe hover:text-velmora-gold transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-velmora-taupe hover:text-velmora-gold transition-colors"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-velmora-taupe hover:text-velmora-gold transition-colors"
              >
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-cream/80 hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-cream/80 hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-cream/80 hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['visa', 'mastercard', 'amex', 'paypal'].map((icon) => (
              <div
                key={icon}
                className="w-10 h-6 bg-velmora-cream/10 rounded flex items-center justify-center text-[10px] uppercase tracking-wider text-velmora-taupe"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
