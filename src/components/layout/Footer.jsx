import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'All Jewelry', to: '/shop' },
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
    <footer className="bg-brand-base text-brand-text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo & tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-light text-brand-text-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted font-light leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Designed to be treasured, worn, and loved — every single day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-brand-muted hover:text-brand-text-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-muted hover:text-brand-text-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-muted hover:text-brand-text-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] font-sans font-medium text-brand-text-light mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-brand-muted hover:text-brand-text-light transition-colors font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted font-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brand-muted font-light">Visa</span>
            <span className="text-xs text-brand-muted font-light">Mastercard</span>
            <span className="text-xs text-brand-muted font-light">Amex</span>
            <span className="text-xs text-brand-muted font-light">PayPal</span>
            <span className="text-xs text-brand-muted font-light">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
