import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'All Jewelry', path: '/shop' },
  ]

  const helpLinks = [
    { label: 'Shipping & Returns', path: '/' },
    { label: 'Care Guide', path: '/' },
    { label: 'FAQ', path: '/' },
    { label: 'Contact Us', path: '/' },
  ]

  const companyLinks = [
    { label: 'Our Story', path: '/#about' },
    { label: 'Journal', path: '/#journal' },
    { label: 'Sustainability', path: '/' },
    { label: 'Press', path: '/' },
  ]

  return (
    <footer className="bg-warm-black text-warm-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wide-30 uppercase text-warm-cream">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-warm-cream/60 mt-4 leading-relaxed">
              Demi-fine gold jewelry crafted for everyday elegance. Designed in-house, delivered to your door.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-warm-cream/60 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-cream/60 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-cream/60 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-sm tracking-wide-20 uppercase text-warm-cream mb-4">Shop</h3>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-warm-cream/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-sm tracking-wide-20 uppercase text-warm-cream mb-4">Help</h3>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-warm-cream/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-sm tracking-wide-20 uppercase text-warm-cream mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-warm-cream/60 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-warm-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-warm-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-warm-cream/40 border border-warm-cream/20 px-2 py-1 rounded">Visa</span>
            <span className="font-sans text-xs text-warm-cream/40 border border-warm-cream/20 px-2 py-1 rounded">MC</span>
            <span className="font-sans text-xs text-warm-cream/40 border border-warm-cream/20 px-2 py-1 rounded">Amex</span>
            <span className="font-sans text-xs text-warm-cream/40 border border-warm-cream/20 px-2 py-1 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
