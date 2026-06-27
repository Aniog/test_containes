import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
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
      { label: 'Shipping', to: '/help' },
      { label: 'Returns & Exchanges', to: '/help' },
      { label: 'Materials & Care', to: '/help' },
      { label: 'Contact Us', to: '/help' },
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
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl tracking-[0.3em]">VELMORA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-velmora-cream/60">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-velmora-cream/70 transition-colors hover:text-velmora-gold">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-cream/70 transition-colors hover:text-velmora-gold">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-cream/70 transition-colors hover:text-velmora-gold">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-velmora-gold">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-velmora-cream/70 transition-colors hover:text-velmora-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-velmora-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-velmora-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((p) => (
              <span
                key={p}
                className="rounded-sm border border-velmora-cream/20 px-2 py-1 text-[9px] font-medium tracking-wider text-velmora-cream/60"
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
