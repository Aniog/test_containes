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
  { label: 'FAQs', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Sustainability', href: '#' },
  { label: 'Stockists', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl uppercase tracking-[0.18em] font-semibold"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm text-cream/70 font-sans max-w-xs leading-relaxed">
              Demi-fine jewelry designed to be treasured. Thoughtfully crafted
              in 18K gold plate, made for everyday luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/70 hover:text-gold transition-colors duration-300"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/70 hover:text-gold transition-colors duration-300"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream/70 hover:text-gold transition-colors duration-300"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-sans text-gold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-sans text-gold mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-sans text-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50 font-sans">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-cream/40 font-sans px-2 py-1 border border-cream/10">
              Visa
            </span>
            <span className="text-[10px] uppercase tracking-widest text-cream/40 font-sans px-2 py-1 border border-cream/10">
              Mastercard
            </span>
            <span className="text-[10px] uppercase tracking-widest text-cream/40 font-sans px-2 py-1 border border-cream/10">
              Amex
            </span>
            <span className="text-[10px] uppercase tracking-widest text-cream/40 font-sans px-2 py-1 border border-cream/10">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
