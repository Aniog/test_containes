import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products We Source', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow bg-white ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-700 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-brand-700 font-bold text-lg leading-tight">
              SSourcing<span className="text-accent-500">China</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-neutral-700 hover:text-brand-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-400 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-neutral-200 shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-neutral-700 hover:text-brand-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-4 py-2.5 rounded-lg text-sm text-center transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
