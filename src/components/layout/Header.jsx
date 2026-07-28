import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Phone, Mail } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-1.5 text-navy-200 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>info@ssourcingchina.com</span>
              </a>
              <a href="tel:+8613800138000" className="flex items-center gap-1.5 text-navy-200 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>+86 138-0013-8000</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-navy-300">|</span>
              <span className="text-navy-200">Shenzhen, China</span>
              <Globe className="w-3.5 h-3.5 text-navy-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-cta-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-navy-900">
                S<span className="text-cta-500">Sourcing</span>
                <span className="text-navy-600 font-medium ml-1">China</span>
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? 'text-cta-500 bg-cta-50'
                    : 'text-navy-700 hover:text-cta-500 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-cta-500 hover:bg-cta-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-cta-500 bg-cta-50'
                    : 'text-navy-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-cta-500 hover:bg-cta-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
