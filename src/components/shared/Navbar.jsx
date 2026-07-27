import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-white text-xl lg:text-2xl font-bold tracking-tight">
              S<span className="text-accent">Sourcing</span> China
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              Get a Free Quote
            </a>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-navy-700">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors mt-2"
            >
              <Phone className="w-4 h-4" />
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
