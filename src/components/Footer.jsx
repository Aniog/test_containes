import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const COLUMNS = [
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

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.3em] uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-cream/70 max-w-xs leading-relaxed">
              Demi-fine gold jewelry, crafted to be treasured. Designed in studio,
              made to be worn every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-champagne transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-champagne mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment / trust */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-champagne mb-4">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2">
              {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-wider text-cream/70 border border-cream/20 px-2 py-1.5"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/50">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
