import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
]

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid =
    !isHome || scrolled || mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${solid ? 'text-brand-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${solid ? 'text-brand-900' : 'text-white'}`} />
              )}
            </button>

            {/* Center desktop links */}
            <nav className="hidden lg:flex items-center gap-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-300 ${
                    solid
                      ? 'text-brand-600 hover:text-brand-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={`font-display text-lg lg:text-xl tracking-wider transition-colors duration-300 ${
                solid ? 'text-brand-900' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Spacer */}
            <div className="hidden lg:block flex-1" />

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 ${
                  solid ? 'text-brand-600 hover:text-brand-900' : 'text-white/80 hover:text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={onCartOpen}
                className={`relative p-2 transition-colors duration-300 ${
                  solid ? 'text-brand-600 hover:text-brand-900' : 'text-white/80 hover:text-white'
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-brand-900 text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-400 overflow-hidden ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-6 pb-6 pt-2 bg-cream-50 border-t border-brand-200/50 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm tracking-wider uppercase font-sans text-brand-700 hover:text-brand-900 border-b border-brand-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-16 lg:h-20" />}
    </>
  )
}