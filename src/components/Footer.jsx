import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Bestsellers', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'Materials & Care', to: '/about' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.3em] text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-muted">
              Demi-fine gold jewelry, crafted to be treasured. 18K gold plated,
              hypoallergenic, made for the everyday and the unforgettable.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory-muted transition-colors hover:text-gold"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ivory-muted transition-colors hover:text-gold"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-ivory-muted transition-colors hover:text-gold"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory-muted transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 md:flex-row">
          <p className="text-xs tracking-[0.1em] text-ivory-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((p) => (
              <span
                key={p}
                className="rounded border border-gold/20 px-2 py-1 text-[10px] tracking-[0.1em] text-ivory-muted"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
