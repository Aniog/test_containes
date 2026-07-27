import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'

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
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="h-7 w-7 text-blue-900" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              SSourcing China
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue-900 ${
                  location.pathname === link.path
                    ? 'text-blue-900'
                    : 'text-gray-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue-900 ${
                  location.pathname === link.path
                    ? 'text-blue-900'
                    : 'text-gray-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
