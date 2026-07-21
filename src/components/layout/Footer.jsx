import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=Earrings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Huggies', href: '/shop?category=Huggies' },
    { label: 'Gift Sets', href: '/shop?category=Sets' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Care Guide', href: '/care' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Stockists', href: '/stockists' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-champagne bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest-plus text-espresso">
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-taupe">
              Demi-fine jewelry designed for everyday elegance. Crafted in 18K gold-plated and sterling silver finishes.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-taupe transition-colors hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-taupe transition-colors hover:text-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-taupe transition-colors hover:text-gold">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wide text-espresso">Shop</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wide text-espresso">Help</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg tracking-wide text-espresso">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-champagne pt-8 sm:flex-row">
          <p className="text-xs text-warm-gray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-10 items-center justify-center rounded border border-champagne bg-cream-light text-[9px] font-semibold text-taupe">
              VISA
            </div>
            <div className="flex h-6 w-10 items-center justify-center rounded border border-champagne bg-cream-light text-[9px] font-semibold text-taupe">
              MC
            </div>
            <div className="flex h-6 w-10 items-center justify-center rounded border border-champagne bg-cream-light text-[9px] font-semibold text-taupe">
              AMEX
            </div>
            <div className="flex h-6 w-10 items-center justify-center rounded border border-champagne bg-cream-light text-[9px] font-semibold text-taupe">
              PayPal
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
