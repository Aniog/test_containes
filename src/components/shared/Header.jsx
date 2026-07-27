import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <Globe className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold text-neutral-800">SSourcing China</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium no-underline transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-2 rounded-md no-underline transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-neutral-600 hover:text-primary-500 border-0 bg-transparent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium no-underline px-3 py-2 rounded-md ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-600 hover:text-primary-500 hover:bg-primary-50'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-4 py-2.5 rounded-md no-underline text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
