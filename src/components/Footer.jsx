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
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns & Exchanges', to: '/about' },
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
    <footer className="bg-ink text-ivory">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.3em] font-semibold"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-sm text-ivory/60 max-w-xs leading-relaxed">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made for the everyday and the once-in-a-lifetime.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="text-ivory/70 hover:text-champagne transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-widest2 text-champagne font-sans font-semibold mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest2 text-champagne font-sans font-semibold mb-5">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2">
              {['VISA', 'MC', 'AMEX', 'PAY', 'GPAY'].map((p) => (
                <span
                  key={p}
                  className="text-[10px] font-semibold tracking-wide text-ivory/80 border border-ivory/25 rounded px-2 py-1.5"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-ivory/50">
            <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
            <a href="#" className="hover:text-ivory transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
