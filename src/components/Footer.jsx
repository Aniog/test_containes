import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
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
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-serif text-3xl tracking-[0.25em] text-ivory">VELMORA</span>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in studio,
              made for everyday luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="text-ivory/70 hover:text-gold transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-widest2 text-gold font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment / trust */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest2 text-gold font-medium mb-4">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2">
              {['VISA', 'MC', 'AMEX', 'PAY'].map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-wider text-ivory/70 border border-ivory/20 px-2 py-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-ivory/50">
            <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
            <a href="#" className="hover:text-ivory transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
