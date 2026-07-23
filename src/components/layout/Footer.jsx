import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/collection' },
      { label: 'Earrings', href: '/collection?category=earrings' },
      { label: 'Necklaces', href: '/collection?category=necklaces' },
      { label: 'Huggies', href: '/collection?category=huggies' },
      { label: 'Gift Sets', href: '/collection?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'Care Instructions', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Sustainability', href: '#' },
      { label: 'Journal', href: '#journal' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-divider/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide text-brand-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-xs">
              Crafted to be treasured. Fine demi-fine jewelry designed for the modern woman —
              accessible luxury that lasts.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-sans tracking-widest uppercase text-brand-cream mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-brand-muted hover:text-brand-gold transition-colors duration-200"
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
        <div className="mt-16 pt-8 border-t border-brand-divider/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-3 text-brand-muted">
              <span className="text-xs uppercase tracking-wider">Visa</span>
              <span className="text-brand-divider/20">|</span>
              <span className="text-xs uppercase tracking-wider">Mastercard</span>
              <span className="text-brand-divider/20">|</span>
              <span className="text-xs uppercase tracking-wider">Amex</span>
              <span className="text-brand-divider/20">|</span>
              <span className="text-xs uppercase tracking-wider">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
