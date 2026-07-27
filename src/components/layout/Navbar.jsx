import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <nav className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SS</span>
          </div>
          <span className="text-xl font-bold text-slate-900">SSourcing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(link.path)
                  ? 'text-brand-700 bg-brand-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="btn-accent text-sm">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-accent w-full text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
