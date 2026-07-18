import { Link } from 'react-router-dom'
import { Facebook, Instagram, PinIcon } from 'lucide-react'
import { footerLinks } from '@/data/storefront'

const paymentMarks = ['Visa', 'Mastercard', 'Amex', 'PayPal']

const footerHrefMap = {
  Bestsellers: '/shop',
  Earrings: '/shop?category=Earrings',
  Necklaces: '/shop?category=Necklaces',
  'Gift Sets': '/shop?category=Gift%20Sets',
  Shipping: '/about',
  Returns: '/about',
  'Care Guide': '/journal',
  Contact: '/about',
  'About Velmora': '/about',
  Journal: '/journal',
  Stockists: '/about',
  Careers: '/about',
}

export function Footer() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-porcelain text-velmora-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,0.8fr)] lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="font-display text-3xl tracking-[0.35em] text-velmora-espresso">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-truffle">
            Demi-fine jewelry designed for everyday ritual, meaningful gifting, and effortless polish.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.22em] text-velmora-truffle">
            {paymentMarks.map((mark) => (
              <span key={mark} className="rounded-full border border-velmora-line px-3 py-2">
                {mark}
              </span>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-truffle">{title}</h3>
            <ul className="space-y-3 text-sm text-velmora-espresso">
              {links.map((link) => (
                <li key={link}>
                  <Link to={footerHrefMap[link] || '/shop'} className="transition hover:text-velmora-gold">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-velmora-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs uppercase tracking-[0.25em] text-velmora-truffle sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="transition hover:text-velmora-gold">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="transition hover:text-velmora-gold">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="transition hover:text-velmora-gold">
              <PinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
