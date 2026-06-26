import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icons, navLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className={`font-bold text-lg ${scrolled || !isHome ? 'text-primary' : 'text-white'}`}>
              SSourcing<span className="text-accent">China</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? scrolled || !isHome
                      ? 'text-primary bg-primary/8'
                      : 'text-white bg-white/15'
                    : scrolled || !isHome
                      ? 'text-text-secondary hover:text-primary hover:bg-primary/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <Icons.X className={`w-6 h-6 ${scrolled || !isHome ? 'text-text-primary' : 'text-white'}`} />
            ) : (
              <Icons.Menu className={`w-6 h-6 ${scrolled || !isHome ? 'text-text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === link.path
                    ? 'text-primary bg-primary/8'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-alt'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 px-3 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-md text-center transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}