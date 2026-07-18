import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'SHOP',
    links: [
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop' },
      { label: 'New Arrivals', path: '/shop' },
    ],
  },
  {
    title: 'HELP',
    links: [
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Size Guide', path: '/size-guide' },
      { label: 'Care Instructions', path: '/care' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Press', path: '/press' },
      { label: 'Careers', path: '/careers' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-serif text-3xl font-semibold tracking-super-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-ultra-wide font-semibold mb-6 text-brand-gold">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-brand-muted-light hover:text-white transition-colors duration-300"
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
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brand-muted-light font-sans">Visa</span>
            <span className="text-xs text-brand-muted-light font-sans">Mastercard</span>
            <span className="text-xs text-brand-muted-light font-sans">Amex</span>
            <span className="text-xs text-brand-muted-light font-sans">PayPal</span>
            <span className="text-xs text-brand-muted-light font-sans">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
