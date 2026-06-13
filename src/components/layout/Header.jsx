import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-950/95 backdrop-blur-md border-b border-brand-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-sm md:text-base tracking-tight">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base tracking-widest uppercase leading-tight">
                ARTITECT
              </span>
              <span className="text-brand-400 text-[10px] md:text-xs tracking-[0.2em] uppercase leading-tight">
                Machinery
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-accent bg-brand-800/60'
                    : 'text-brand-200 hover:text-white hover:bg-brand-800/40'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              Get a Quote
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-brand-200 hover:text-white rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-950 border-t border-brand-800/50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-accent bg-brand-800/60'
                    : 'text-brand-200 hover:text-white hover:bg-brand-800/40'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 px-5 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              Get a Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
