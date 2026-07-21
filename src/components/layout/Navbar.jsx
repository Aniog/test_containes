import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { cn } from '../../lib/utils'

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/shop?category=earrings', label: 'Earrings' },
  { href: '/shop?category=necklaces', label: 'Necklaces' },
  { href: '/about', label: 'About' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-cream-50/95 backdrop-blur-md shadow-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-5 h-5', !isTransparent && 'text-charcoal-900')} />
            ) : (
              <Menu className={cn('w-5 h-5', !isTransparent && 'text-charcoal-900')} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-xl lg:text-2xl tracking-ultra-wide transition-colors',
              isTransparent ? 'text-cream-50' : 'text-charcoal-900'
            )}
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-sans font-medium tracking-wide transition-colors hover:opacity-70',
                  isTransparent ? 'text-cream-50' : 'text-charcoal-900'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button
              className={cn(
                'p-2 transition-colors hover:opacity-70',
                isTransparent ? 'text-cream-50' : 'text-charcoal-900'
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={cn(
                'p-2 transition-colors hover:opacity-70 relative',
                isTransparent ? 'text-cream-50' : 'text-charcoal-900'
              )}
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold-500 text-charcoal-900 text-xs font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <div className="bg-cream-50 border-t border-warmgray-200 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-3 text-sm font-medium text-charcoal-900 border-b border-warmgray-100 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
