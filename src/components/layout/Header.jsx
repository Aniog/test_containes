import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Mail, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-sm">
        <div className="container-custom py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <a href="tel:+8675512345678" className="hover:text-white transition-colors">+86 755 1234 5678</a>
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            Serving buyers in 50+ countries
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <span className="text-slate-900 font-bold text-lg leading-tight block">SSourcing</span>
              <span className="text-blue-800 text-xs font-medium -mt-1 block">China</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-800 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-flex btn-primary text-sm">
              Get a Free Sourcing Quote
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-800 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
