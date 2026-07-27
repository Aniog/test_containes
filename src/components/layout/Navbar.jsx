import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products We Source', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-navy-600 font-bold text-lg tracking-tight">SSourcing China</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-navy-600 bg-navy-50'
                    : 'text-gray-600 hover:text-navy-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 bg-accent-400 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-500 transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-navy-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-navy-600 bg-navy-50'
                    : 'text-gray-600 hover:text-navy-600 hover:bg-gray-50'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 bg-accent-400 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-accent-500 transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
