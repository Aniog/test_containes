import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">SS</span>
            </div>
            <div>
              <span className="text-lg font-bold text-slate-800">SSourcing</span>
              <span className="text-lg font-bold text-accent ml-0.5">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-sm"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-3 px-5 py-3 bg-accent text-white text-center text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
