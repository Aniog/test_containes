import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Factory } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Factory className="w-6 h-6 text-gold" />
          <span className="text-lg font-bold tracking-tight text-navy group-hover:text-gold transition-colors">
            ARTITECT MACHINERY
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-gold'
                  : 'text-text-secondary hover:text-navy'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-navy text-warm-white hover:bg-navy/90 transition-colors"
          >
            Request Quote
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-warm-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-text-secondary hover:text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-navy text-warm-white hover:bg-navy/90 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}