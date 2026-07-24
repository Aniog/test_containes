import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { label: 'All Jewelry', path: '/collection' },
    { label: 'Earrings', path: '/collection?category=earrings' },
    { label: 'Necklaces', path: '/collection?category=necklaces' },
    { label: 'Huggies', path: '/collection?category=huggies' },
    { label: 'Gift Sets', path: '/collection?category=sets' },
  ]

  const helpLinks = [
    { label: 'Shipping & Returns', path: '/shipping' },
    { label: 'Size Guide', path: '/size-guide' },
    { label: 'Care Instructions', path: '/care' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ]

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Press', path: '/press' },
  ]

  return (
    <footer className="bg-velmora-text text-white">
      <div className="container-velmora py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-light tracking-[0.15em] text-white">
                VELMORA
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who values quality and elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="nav-link text-white mb-6">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-velmora-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="nav-link text-white mb-6">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-velmora-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="nav-link text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-velmora-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs">Visa</span>
            <span className="text-white/40 text-xs">Mastercard</span>
            <span className="text-white/40 text-xs">Amex</span>
            <span className="text-white/40 text-xs">PayPal</span>
            <span className="text-white/40 text-xs">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
