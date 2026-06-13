import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Ship, ChevronDown } from 'lucide-react'

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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-[#1B4D8E] font-extrabold text-xl tracking-tight no-underline">
          <Ship className="w-7 h-7 text-[#1B4D8E]" />
          <span>SSourcing China</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium no-underline transition-colors ${
                location.pathname === link.path
                  ? 'text-[#1B4D8E] border-b-2 border-[#1B4D8E] pb-0.5'
                  : 'text-gray-600 hover:text-[#1B4D8E]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-[#1B4D8E] bg-transparent border-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium no-underline py-2 px-3 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#1B4D8E] bg-blue-50'
                    : 'text-gray-600 hover:text-[#1B4D8E] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm mt-2 text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
