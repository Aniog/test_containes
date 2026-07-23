import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = [
  { label: 'Earrings', path: '/shop?category=earrings' },
  { label: 'Necklaces', path: '/shop?category=necklaces' },
  { label: 'Huggies', path: '/shop?category=huggies' },
  { label: 'New Arrivals', path: '/shop' },
  { label: 'Bestsellers', path: '/shop' },
]

const helpLinks = [
  { label: 'Shipping & Returns', path: '/about' },
  { label: 'Care Guide', path: '/about' },
  { label: 'FAQ', path: '/about' },
  { label: 'Contact Us', path: '/about' },
]

const companyLinks = [
  { label: 'Our Story', path: '/about' },
  { label: 'Journal', path: '/journal' },
  { label: 'Sustainability', path: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wider font-semibold">VELMORA</Link>
            <p className="font-sans text-sm text-velmora-muted-light mt-3 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-muted-light hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted-light hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted-light hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-sm tracking-product uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-velmora-muted-light hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-sm tracking-product uppercase mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-velmora-muted-light hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-sm tracking-product uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-velmora-muted-light hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-velmora-muted-light">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons placeholder */}
            <span className="font-sans text-xs text-velmora-muted-light border border-white/20 rounded px-2 py-1">VISA</span>
            <span className="font-sans text-xs text-velmora-muted-light border border-white/20 rounded px-2 py-1">MC</span>
            <span className="font-sans text-xs text-velmora-muted-light border border-white/20 rounded px-2 py-1">AMEX</span>
            <span className="font-sans text-xs text-velmora-muted-light border border-white/20 rounded px-2 py-1">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
