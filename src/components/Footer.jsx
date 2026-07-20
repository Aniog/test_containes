import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '/shop' },
    { label: 'Size Guide', href: '/shop' },
    { label: 'Jewelry Care', href: '/about' },
    { label: 'FAQ', href: '/about' },
    { label: 'Contact Us', href: '/about' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Careers', href: '/journal' },
    { label: 'Press', href: '/journal' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-2xl font-semibold uppercase tracking-[0.25em] text-velmora-ink"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-velmora-warmgray">
              Demi-fine gold jewelry designed for everyday elegance. Crafted to be treasured, gifted,
              and worn often.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">Shop</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-warmgray transition hover:text-velmora-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">Help</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-warmgray transition hover:text-velmora-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">Company</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-warmgray transition hover:text-velmora-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-velmora-stone pt-8 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-taupe">
            <span className="rounded border border-velmora-stone px-2 py-1">Visa</span>
            <span className="rounded border border-velmora-stone px-2 py-1">Mastercard</span>
            <span className="rounded border border-velmora-stone px-2 py-1">Amex</span>
            <span className="rounded border border-velmora-stone px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
