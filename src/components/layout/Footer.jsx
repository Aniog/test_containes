import { Link } from 'react-router-dom'
import { Instagram, Facebook, Globe } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop' },
      { label: 'Necklaces', path: '/shop' },
      { label: 'Huggies', path: '/shop' },
      { label: 'Sets', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/' },
      { label: 'Care Guide', path: '/' },
      { label: 'FAQ', path: '/' },
      { label: 'Contact Us', path: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/' },
      { label: 'Journal', path: '/' },
      { label: 'Sustainability', path: '/' },
      { label: 'Careers', path: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo + social */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-[0.15em] text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-cream/60 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="p-2 text-cream/60 hover:text-cream transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 text-cream/60 hover:text-cream transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Pinterest" className="p-2 text-cream/60 hover:text-cream transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-cream/50 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-[11px] uppercase tracking-[0.1em] text-cream/40"
              >
                {method}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-cream/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}