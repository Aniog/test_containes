import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy">
            <span className="text-lg font-bold text-white">S</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-brand-navy tracking-tight">SSourcing</span>
            <span className="text-[10px] font-medium text-brand-orange uppercase tracking-widest">China</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(link.path)
                  ? 'text-brand-orange bg-orange-50'
                  : 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-5">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-brand-navy"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-orange bg-orange-50'
                    : 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Button asChild className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
