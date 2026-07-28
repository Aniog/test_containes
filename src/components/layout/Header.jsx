import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products We Source' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-brand-500 leading-tight">SSourcing</span>
              <span className="text-xs text-gray-500 leading-tight -mt-0.5">China</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-500 bg-brand-50'
                    : 'text-gray-600 hover:text-brand-500 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+86-1234567890" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-500">
              <Phone className="w-4 h-4" />
              <span>+86 123 4567 890</span>
            </a>
            <Link to="/contact">
              <Button variant="accent" size="sm">
                Get a Free Sourcing Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-brand-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-500 bg-brand-50'
                    : 'text-gray-600 hover:text-brand-500 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-3">
              <a href="tel:+86-1234567890" className="flex items-center gap-2 px-3 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+86 123 4567 890</span>
              </a>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block">
                <Button variant="accent" size="default" className="w-full">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}