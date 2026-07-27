import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-navy-700 text-lg leading-tight">SSourcing</span>
              <span className="text-xs text-gray-500 leading-tight -mt-0.5">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive(link.to)
                    ? 'text-navy-700 bg-navy-50'
                    : 'text-gray-600 hover:text-navy-700 hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
                  isActive(link.to)
                    ? 'text-navy-700 bg-navy-50'
                    : 'text-gray-600 hover:text-navy-700 hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-accent-500 hover:bg-accent-600 text-white px-5 py-3 rounded-lg font-semibold text-sm text-center transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}