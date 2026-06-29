import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
      isActive
        ? 'text-accent'
        : 'text-text-primary hover:text-accent'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-accent font-bold text-sm">AM</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold tracking-tight text-primary">
                ARTITECT
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
                Machinery
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}