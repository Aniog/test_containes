import { Facebook, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/#newsletter' },
      { label: 'Returns', to: '/#newsletter' },
      { label: 'Care Guide', to: '/#story' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <Link to="/" className="font-display text-3xl uppercase tracking-luxe text-white">
            Velmora
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            Quiet luxury jewelry for self-purchase, thoughtful gifting, and the
            small rituals that make every day feel elevated.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-3 py-2 text-xs uppercase tracking-widest text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm uppercase tracking-widest text-white/60">
                {column.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                {column.links.map((link) => (
                  <Link key={link.label} to={link.to} className="block transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-4 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Designed for modern heirlooms.</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" className="transition hover:text-white" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" className="transition hover:text-white" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
