import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-ink-900" />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-ink-900' : 'text-white'}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl lg:text-2xl tracking-widest transition-colors duration-300 ${
              scrolled || !isHome ? 'text-ink-900' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/about', label: 'Journal' },
            ].map((link) => (
              <Link
                key={link.to + link.label}
                to={link.to}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 hover:text-gold-600 ${
                  scrolled || !isHome ? 'text-ink-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors duration-300 hover:text-gold-600 ${
                scrolled || !isHome ? 'text-ink-700' : 'text-white/90'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative p-2 transition-colors duration-300 hover:text-gold-600 ${
                scrolled || !isHome ? 'text-ink-700' : 'text-white/90'
              }`}
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-600 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream/95 backdrop-blur-md border-t border-ink-100 px-4 py-6 space-y-4">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/collections', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/about', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.to + link.label}
              to={link.to}
              className="block text-sm uppercase tracking-[0.18em] text-ink-700 py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}