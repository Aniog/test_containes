import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-navy">
            <span className="text-gold">SS</span>ourcing China
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-navy'
                    : 'text-slate-600 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-navy'
                    : 'text-slate-600 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-3 bg-gold hover:bg-gold-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg text-center transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
