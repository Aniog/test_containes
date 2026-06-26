import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Factory } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group" aria-label="ARTITECT MACHINERY Home">
            <Factory className="w-7 h-7 text-accent-500 group-hover:text-accent-600 transition-colors" />
            <span className="text-lg font-bold text-brand-900 tracking-tight">
              ARTITECT <span className="text-accent-500">MACHINERY</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-brand-50 text-accent-600'
                    : 'text-brand-600 hover:text-brand-900 hover:bg-brand-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-brand-600 hover:text-brand-900 hover:bg-brand-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-brand-50 text-accent-600'
                    : 'text-brand-600 hover:text-brand-900 hover:bg-brand-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center text-white bg-accent-500 hover:bg-accent-600 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
