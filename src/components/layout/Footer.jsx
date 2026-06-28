import { Instagram, Facebook, PinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=Earrings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Huggies', href: '/shop?category=Huggies' },
    { label: 'Gift Sets', href: '/shop?category=Gift%20Sets' },
  ],
  Help: [
    { label: 'Shipping', href: '/product/royal-heirloom-set#shipping-returns' },
    { label: 'Returns', href: '/product/vivid-aura-jewels#shipping-returns' },
    { label: 'Care Guide', href: '/product/amber-lace-earrings#materials-care' },
    { label: 'Contact', href: '/#newsletter' },
  ],
  Company: [
    { label: 'About Velmora', href: '/#story' },
    { label: 'Journal', href: '/#journal' },
    { label: 'Stockists', href: '/shop' },
    { label: 'Privacy', href: '/#footer' },
  ],
}

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-stone-800 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr,1fr] lg:px-12">
        <div className="space-y-6">
          <Link
            to="/"
            className="inline-block font-[Cormorant_Garamond] text-3xl tracking-[0.35em] text-stone-50"
          >
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-stone-300">
            Modern demi-fine jewelry designed for self-purchase, thoughtful gifting,
            and everyday moments that deserve a little glow.
          </p>
          <div className="flex items-center gap-3 text-stone-300">
            <a
              className="rounded-full border border-stone-700 p-3 transition hover:border-amber-200 hover:text-amber-200"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              className="rounded-full border border-stone-700 p-3 transition hover:border-amber-200 hover:text-amber-200"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              className="rounded-full border border-stone-700 p-3 transition hover:border-amber-200 hover:text-amber-200"
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              <PinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-stone-400">
                {title}
              </h3>
              <ul className="space-y-3 text-sm text-stone-200">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="transition hover:text-amber-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.2em] text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Visa · Mastercard · Amex · PayPal</p>
          <p>© 2026 Velmora Fine Jewelry</p>
        </div>
      </div>
    </footer>
  )
}
