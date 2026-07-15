import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
      { label: 'New Arrivals', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Care Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-warm-300">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-white font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-warm-400 max-w-xs">
              Demi-fine jewelry crafted with intention. Designed for the modern woman who values quality and elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-warm-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-xs tracking-product uppercase text-white mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-warm-400 hover:text-gold transition-colors"
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
        <div className="border-t border-warm-700 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-warm-500">Visa</span>
            <span className="text-xs text-warm-500">Mastercard</span>
            <span className="text-xs text-warm-500">Amex</span>
            <span className="text-xs text-warm-500">PayPal</span>
            <span className="text-xs text-warm-500">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
