import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-lg font-[var(--font-display)]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm md:text-base tracking-wider uppercase">
                ARTITECT
              </span>
              <span className="text-amber-500 text-[10px] md:text-xs tracking-widest uppercase -mt-1">
                MACHINERY
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-amber-500'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-500 transition-colors duration-200 flex items-center gap-1.5"
            >
              Get a Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-slate-700 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-base font-medium uppercase tracking-wide py-2 border-b border-slate-800 ${
                location.pathname === link.path
                  ? 'text-amber-500'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 block w-full text-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-500 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
