import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Care Guide', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-2xl tracking-[0.18em] font-semibold uppercase"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Demi-fine gold jewelry designed to be treasured. Crafted with
              intention, worn with confidence, and made for everyday luxury.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-cream/70 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/70 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/70 transition-colors hover:text-gold"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-gold">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-gold">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-gold">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="rounded bg-cream/10 px-2 py-1 text-[10px] uppercase tracking-wider text-cream/60">
              Visa
            </span>
            <span className="rounded bg-cream/10 px-2 py-1 text-[10px] uppercase tracking-wider text-cream/60">
              Mastercard
            </span>
            <span className="rounded bg-cream/10 px-2 py-1 text-[10px] uppercase tracking-wider text-cream/60">
              Amex
            </span>
            <span className="rounded bg-cream/10 px-2 py-1 text-[10px] uppercase tracking-wider text-cream/60">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
