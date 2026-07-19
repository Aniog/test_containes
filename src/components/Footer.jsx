import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop', label: 'All Jewelry' },
  ]

  const helpLinks = [
    { to: '/shipping', label: 'Shipping Info' },
    { to: '/returns', label: 'Returns & Exchanges' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/careers', label: 'Careers' },
  ]

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl font-semibold text-ivory tracking-wide">
                VELMORA
              </h2>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman
              who appreciates understated luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 border border-stone-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-stone-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-stone-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-stone-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Help
            </h3>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-stone-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-stone-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="mt-14 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-500 uppercase tracking-wider">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                  <span
                    key={method}
                    className="px-2 py-1 border border-stone-700 text-[10px] text-stone-400 font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-stone-500">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
