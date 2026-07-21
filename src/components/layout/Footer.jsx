import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?type=earring' },
      { label: 'Necklaces', to: '/shop?type=necklace' },
      { label: 'Huggies', to: '/shop?type=huggie' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns & Exchanges', to: '/about' },
      { label: 'Materials & Care', to: '/about' },
      { label: 'Contact Us', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Wholesale', to: '/about' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-[0.35em] text-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs text-sm text-cream/70 leading-relaxed">
              Demi-fine 18K gold plated jewelry, crafted to be treasured. Designed in studio,
              made to be worn every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-gold transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs uppercase tracking-widest2 text-cream/50 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/80 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/15 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((p) => (
              <span
                key={p}
                className="rounded border border-cream/20 px-2.5 py-1 text-[10px] tracking-widest3 text-cream/60"
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
