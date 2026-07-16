import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Gift Sets', to: '/shop' },
      { label: 'Bestsellers', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/#about' },
      { label: 'Returns & Exchanges', to: '/#about' },
      { label: 'Materials & Care', to: '/#about' },
      { label: 'Contact Us', to: '/#about' },
      { label: 'FAQ', to: '/#about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/#about' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Sustainability', to: '/#about' },
      { label: 'Careers', to: '/#about' },
      { label: 'Press', to: '/#about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-wide2">
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              Demi-fine gold jewelry, crafted to be treasured. Designed in studio,
              made to be worn every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-ivory/70 transition-colors hover:text-gold"
                  aria-label="Social link"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-wide2 text-champagne">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 md:flex-row">
          <p className="text-[11px] uppercase tracking-wide2 text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((p) => (
              <span
                key={p}
                className="border border-ivory/20 px-2 py-1 text-[9px] uppercase tracking-wide2 text-ivory/60"
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
