import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = [
  { label: 'Earrings', path: '/shop?category=earrings' },
  { label: 'Necklaces', path: '/shop?category=necklaces' },
  { label: 'Huggies', path: '/shop?category=huggies' },
  { label: 'Gift Sets', path: '/shop' },
]

const helpLinks = [
  { label: 'Shipping & Returns', path: '#' },
  { label: 'Size Guide', path: '#' },
  { label: 'Care Instructions', path: '#' },
  { label: 'FAQ', path: '#' },
]

const companyLinks = [
  { label: 'Our Story', path: '/#about' },
  { label: 'Sustainability', path: '#' },
  { label: 'Press', path: '#' },
  { label: 'Contact', path: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-white/90">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Crafted for the modern woman. Demi-fine jewelry that bridges the gap between everyday and extraordinary.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Apple Pay</span>
            <span>·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
